const db = require("../models");
const Post = db.posts;

exports.getAllPosts = (req, res, next) => {
  Post.findAll(
    {
      include: ["profile", db.comments],
      order: [['postId', 'DESC']] 
    },
  )
  .then(
    (allPosts) => {
      res.status(200).json(allPosts);
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

exports.getOnePost = (req, res, next) => {
  Post.findByPk(req.params.id, {include: ["profile", db.comments]})
  .then(
    (onePost) => {
      console.log(onePost);
      res.status(200).json(onePost);
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

exports.createPost = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.item);
  const newPost = 
  {
    profileId: req.body.item.profileId,
    title: req.body.item.title,
    text: req.body.item.text,
  };
  Post.create(newPost)
  .then(() => res.status(201).json({ message: 'Nouvelle publication enregistrée !'}))
  .catch(error => res.status(400).json({ message: error }));
};

exports.deletePost = (req, res, next) => 
{
  Post.destroy({where: {postId: req.params.id}})
  .then(() => res.status(200).json({ message: 'Post deleted !'}))
  .catch(error => res.status(400).json({ error }));
};

/*
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
  {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/pictures/${req.file.filename}`
    //imageUrl: `${req.protocol}://127.0.0.1:8081/backend/pictures/${req.file.filename}`,
  } : { ...req.body };
  if (res.locals.userId !== postObject.userId) 
  {
    return res.status(403).json({ message : 'Invalid user ID' });
  }
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }));
};
*/

exports.setLike = (req, res, next) => 
{
  const userID = req.body.userId;
  const postId = req.params.id;
  
  switch (req.body.like)
  {
    case 1:
      Post.updateOne(
        { _id: postId },
        {
          $push:{usersLiked: userID},
          $inc:{likes: +1}
        })
        .then(() => res.status(200).json({ message: 'Post likée !'}))
        .catch(error => res.status(400).json({ error }));
    break;

    case -1:
      Post.updateOne(
        { _id: postId },
        {
          $push:{usersDisliked: userID},
          $inc:{dislikes: +1}
        })
        .then(() => res.status(200).json({ message: 'Post dislikée !'}))
        .catch(error => res.status(400).json({ error }));
    break;

    case 0:
      Post.findOne({_id: postId})
      .then(post => 
      {
        if (post.usersLiked.includes(userID)) 
        {
          Post.updateOne(
            { _id: postId },
            {
              $pull:{usersLiked: userID},
              $inc:{likes: -1}
            })
            .then(() => res.status(200).json({ message: 'Like retiré !'}))
            .catch(error => res.status(400).json({ error }));
        }
        if (post.usersDisliked.includes(userID)) 
        {
          Post.updateOne(
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
