const express = require('express');
const router = express.Router();
const multer = require('multer');
const app=express();
const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require('../controllers/post.controller');
const jwtHelper = require('../config/jwtHelper');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);



//Post

//Retrieve Post
router.get('/posts', ctrlPost.GetPosts);

// Add Post
router.post('/post', ctrlPost.CreatePost);


// Add Story
router.post('/story', upload.single("files"), ctrlPost.CreateStory);


//Get story
router.get('/story', ctrlPost.getStory);
module.exports = router;
