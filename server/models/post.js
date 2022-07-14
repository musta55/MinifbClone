const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    first_name: {
        type:String,
        required:true
    },
    post_name: {
        type:String,
        required:true
    }
   
});

 const Post = module.exports = mongoose.model('Post', postSchema);
