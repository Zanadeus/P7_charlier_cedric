const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');
const multer = require('../middleware/multerConfig');

const commentsCtrl = require('../controllers/comments');

router.get('/:postId', auth, commentsCtrl.getAllComments);
router.post('/', auth, multer, commentsCtrl.createComment);
router.delete('/:id', auth, multer, commentsCtrl.deleteComment);

module.exports = router;