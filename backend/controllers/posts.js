const Post = require('../models/post');
const fs = require('fs');

exports.getAllPosts = (req, res, next) => {
  Post.find()
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
  Post.findOne({_id: req.params.id})
  .then(
    (onePost) => {
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
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  const newPost = new Post({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/pictures/${req.file.filename}`,
    //imageUrl: `${req.protocol}://127.0.0.1:8081/pictures/${req.file.filename}`,
  });
  
  newPost.save()
  .then(() => res.status(201).json({ message: 'Nouvelle post enregistréé !'}))
  .catch(error => res.status(400).json({ message: error }));
};

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

exports.deletePost = (req, res, next) => 
{
  Post.findOne({ _id: req.params.id })
    .then(post => 
    {
      if (res.locals.userId !== post.userId) 
      {
        return res.status(403).json({ message : 'Invalid user ID' });
      }
      const filename = post.imageUrl.split('/pictures/')[1];
      fs.unlink(`pictures/${filename}`, () => 
      {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post deleted !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

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
