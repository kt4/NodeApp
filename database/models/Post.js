const mongoose = require('mongoose')



// Users, Posts, Products etc


const PostSchema = new mongoose.Schema({

  title: {type: String, required: true},

  subtitle: {type: String, required: true},

  author: {

    type: mongoose.Schema.Types.ObjectId,

    ref: 'User',

    required: true

  },

  content: {type: String, required: true},

  createdAt: {

    type: Date,
    
    default: new Date()

  }

})

const Post = mongoose.model('Post', PostSchema)


module.exports = Post
