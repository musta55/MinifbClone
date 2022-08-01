const express = require('express');
const router = express.Router();
const multer = require('multer');
const app=express();
const ctrlPost = require('../controllers/post.controller');


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

//Post


// Add Story
router.post('/story', upload.single("files"), ctrlPost.CreateStory);


//Get story
router.get('/story', ctrlPost.getStory);
module.exports = router;
