const mongoose = require('mongoose');
const _ = require('lodash');
const Post = require('../models/post');
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
