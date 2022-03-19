const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');
const multer = require('../middleware/multerConfig');

const commentsCtrl = require('../controllers/comments');

router.get('/:postId', /*auth, */commentsCtrl.getAllComments);
//router.get('/:id', /*auth, */commentsCtrl.getOneComment);
router.post('/', /*auth, */multer, commentsCtrl.createComment);
//router.put('/:id', /*auth, */multer, commentsCtrl.modifyComment);
router.delete('/:id', /*auth, */multer, commentsCtrl.deleteComment);
router.post('/:id/like', /*auth, */multer, commentsCtrl.setLike);

module.exports = router;