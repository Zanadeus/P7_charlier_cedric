const express = require('express');
const router = express.Router();
const auth = require('../middleware/authToken');
const multer = require('../middleware/multerConfig');

const postsCtrl = require('../controllers/posts');

router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, multer, postsCtrl.createPost);
router.delete('/:id', auth, multer, postsCtrl.deletePost);

module.exports = router;