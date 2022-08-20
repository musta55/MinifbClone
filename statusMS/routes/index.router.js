const express = require('express');
const router = express.Router();
const app=express();
// const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require('../controllers/post.controller');
const jwtHelper = require('../config/jwtHelper');

//Post

//Retrieve Post
router.get('/post', ctrlPost.GetPosts);

// Add Post
router.post('/post', ctrlPost.CreatePost);

module.exports = router;
