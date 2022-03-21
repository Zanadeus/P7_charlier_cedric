const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');

const postsCtrl = require('../controllers/posts');

router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, postsCtrl.createPost);
router.delete('/:id', auth, postsCtrl.deletePost);

module.exports = router;