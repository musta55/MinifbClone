const mongoose = require('mongoose');
const _ = require('lodash');
const Minio = require('minio');
const Post = require('../models/post');
const story = require('../models/story');
const crypto = require('crypto');

module.exports.CreatePost = (req, res, next) => {
    let newPost = new Post({
        first_name: req.body.first_name,
        post_name: req.body.post_name,

    });

    newPost.save((err, post) => {
        if (err) {
            res.json({ msg: 'failed to add new post' });
        }
        else {
            res.json({ msg: 'Post added successfully' });
        }
    })
}

module.exports.GetPosts = (req, res, next) => {
    Post.find((err, posts) => {
        //   console.log("Server side"+posts.post_name)
        res.json(posts)
    })
}


// Get story using minIO

module.exports.CreateStory = (async (req, res) => {

    const minioClient = minio();

    //PutObject(bucketName, objectName, stream, size, metaData[, callback])



    var file = 'image/raze.jpg'
    var uuidName = crypto.randomUUID();
    minioClient.fPutObject('minifb', uuidName, file, function (err, objInfo) {
        if (err) {
            return console.log(err)
        }
    });



    // minioClient.fputObject('minifb', uuidName, req.body.story, function(err, etag) {
    //     if (err) return console.log(err)
    //     console.log('File uploaded successfully. '+ uuidName)


    //Create a new story
    const newStory = new story({
        name: req.body.name,
        storyUUID: uuidName,
        time: req.body.time
    });

    try {
        const savedStory = await newStory.save();
        res.send({ story: 'Uploaded Successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
});


// exports.getStory = (async (req,res) =>{

//     try{
//         const allStory = await story.findOne().sort({"time":-1});       // -1 means descending
//         const minioClient = minio();
//         try{
//             const stream = minioClient.getObject('minifb', allStory.storyUUID, function (err, dataStream) {
//             if (err) {
//                 return console.log(err)
//               }
//               dataStream.on('end', function() {
//                 console.log(dataStream);
//                 return dataStream;
//               })
//               dataStream.on('error', function(err) {
//                 console.log(err)
//               })
//         })
//         console.log(stream);
//         res.send(allStory);
//     } catch(err){
//         res.status(400).send({Fail: 'Image not found'});
//     }
//     } catch(err){
//         res.status(400).send({Fail: 'Stories not found'});
//     }
// });

function minio() {
    return new Minio.Client({
        endPoint: '127.0.0.1',
        port: 9000,
        useSSL: false,
        accessKey: '2ZzQptFVVYFONjgf',
        secretKey: 'cpcpOT8zq813wumygPD4q5nVZEDcMUkt'
    });
}