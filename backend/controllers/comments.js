const db = require("../models");
const Comment = db.comments;

exports.getAllComments = (req, res, next) => {
  console.log(req.params);
  Comment.findAll(
    { 
      where: { postId: req.params.postId },
      include: ["profile"]
    },
    )
  .then(
    (allComments) => {
      res.status(200).json(allComments);
    }
  )
  .catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
/*
exports.getOneComment = (req, res, next) => {
  Comment.findByPk(req.params.id, {include: ["profile"]})
  .then(
    (oneComment) => {
      res.status(200).json(oneComment);
    }
  )
  .catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
*/
exports.createComment = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.item);
  const newComment = 
  {
    profileId : req.body.item.profileId,
    postId: req.body.item.postId,
    text: req.body.item.text
  };
  Comment.create(newComment)
  .then(() => res.status(201).json({ message: 'Nouvelle publication enregistrée !'}))
  .catch(error => res.status(400).json({ message: error }));
};

/*
exports.modifyComment = (req, res, next) => {
  const commentObject = req.file ?
  {
    ...JSON.parse(req.body.comment),
    imageUrl: `${req.protocol}://${req.get('host')}/pictures/${req.file.filename}`
    //imageUrl: `${req.protocol}://127.0.0.1:8081/backend/pictures/${req.file.filename}`,
  } : { ...req.body };
  if (res.locals.userId !== commentObject.userId) 
  {
    return res.status(403).json({ message : 'Invalid user ID' });
  }
  Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }));
};
*/

exports.deleteComment = (req, res, next) => 
{
  console.log(req.params.id);
  Comment.destroy({where: {commentId: req.params.id}})
  .then(() => res.status(200).json({ message: 'Comment deleted !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.setLike = (req, res, next) => 
{
  const userID = req.body.userId;
  const commentId = req.params.id;
  
  switch (req.body.like)
  {
    case 1:
      Comment.updateOne(
        { _id: commentId },
        {
          $push:{usersLiked: userID},
          $inc:{likes: +1}
        })
        .then(() => res.status(200).json({ message: 'Comment likée !'}))
        .catch(error => res.status(400).json({ error }));
    break;

    case -1:
      Comment.updateOne(
        { _id: commentId },
        {
          $push:{usersDisliked: userID},
          $inc:{dislikes: +1}
        })
        .then(() => res.status(200).json({ message: 'Comment dislikée !'}))
        .catch(error => res.status(400).json({ error }));
    break;

    case 0:
      Comment.findOne({_id: commentId})
      .then(comment => 
      {
        if (comment.usersLiked.includes(userID)) 
        {
          Comment.updateOne(
            { _id: commentId },
            {
              $pull:{usersLiked: userID},
              $inc:{likes: -1}
            })
            .then(() => res.status(200).json({ message: 'Like retiré !'}))
            .catch(error => res.status(400).json({ error }));
        }
        if (comment.usersDisliked.includes(userID)) 
        {
          Comment.updateOne(
            { _id: req.params.id },
            {
              $pull:{usersDisliked: userID},
              $inc:{dislikes: -1}
            })
            .then(() => res.status(200).json({ message: 'Dislike retiré'}))
            .catch(error => res.status(400).json({ error }));
        }
      })
      .catch(error => res.status(400).json({ error }));
      break;

      default:
        console.log('case non configuré');
      break

  }
};
