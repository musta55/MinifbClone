const mongoose = require('mongoose');
const _ = require('lodash');
const Minio = require('minio');
const story = require('../models/story');
const crypto = require('crypto');

// Get story using minIO

module.exports.CreateStory = (async (req, res) => { 

    const minioClient = minio();

    minioClient.makeBucket('minifb', 'us-east-1', function(err) {
        if (err) return console.log('Error creating bucket.', err)
        console.log('Bucket created successfully in "us-east-1".')
    });

    //PutObject(bucketName, objectName, stream, size, metaData[, callback])
   // const filePath="/home/mustahid/Distributed System/MinifbClone/storyMS/image/raze.jpg";
    var uuidName = crypto.randomUUID()+'.png';
    console.log(JSON.stringify(req.file))
    minioClient.fPutObject('minifb', uuidName, req.file.path, function (err, objInfo) {

        console.log("post controller backend er path");

        console.log(req.file.path);

        if (err) {
            return console.log(err)
        }
    });

    // minioClient.fPutObject('minifb', uuidName, filePath, function (err, objInfo) {

    //     if (err) {
    //         return console.log(err)
    //     }
    // });


    //Create a new story
    const newStory = new story({
        name: req.body.name,
        storyUUID: uuidName
    });

    try {
        const savedStory = await newStory.save();
        res.send({ story: 'Uploaded Successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
});

exports.getStory = (async (req,res) =>{
    try{
        const allStory = await story.find().sort({"time":-1}).limit(10);       // -1 means descending
        res.send(allStory);
    } catch(err){
        res.status(400).send({Fail: 'Image not found'});
    }
});


exports.getImage = ( (req,res) =>{
  
        try {
            let data;
             minioClient = minio();
             minioClient.getObject("minifb", req.params.id, (err, objStream) => {
               
                if(err) {
                    return res.status(404).send({ message: "Image not found" });
                }
                objStream.on('data', (chunk) => {
                    console.log("eta error 1?");
                    data = !data ? new Buffer(chunk) : Buffer.concat([data, chunk]);

                });
                console.log(req.params.id);
           
                objStream.on('end', () => {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.write(data);
                    res.end();
                });
            });
        } catch (error) {
            res.status(500).send({ message: "Internal Server Error at fetching image" });
        }
    });

function minio() {
    return new Minio.Client({
        endPoint: 'storyobjectdb',
        port: 9000,
        useSSL: false,
        // accessKey: '2ZzQptFVVYFONjgf',
        // secretKey: 'cpcpOT8zq813wumygPD4q5nVZEDcMUkt'
        accessKey: 'minioadmin',
        secretKey: 'minioadmin'
    });
}

