const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');

const commentsCtrl = require('../controllers/comments');

router.get('/:postId', auth, commentsCtrl.getAllComments);
router.post('/', auth, commentsCtrl.createComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;