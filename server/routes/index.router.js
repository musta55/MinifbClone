const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require('../controllers/post.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);



//Post

//Retrieve Post
router.get('/posts', ctrlPost.GetPosts);

// Add Post
router.post('/post', ctrlPost.CreatePost);


// Add Story
router.post('/story', ctrlPost.CreateStory);
module.exports = router;




