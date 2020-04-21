const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/test-blog');



Post.findById("5e89d4584cc6c94a30eeb581", (error,posts) => {
  console.log(error,posts)
})


// Post.findByIdAndUpdate("5e89d4584cc6c94a30eeb581", {
  
//   title: "My first fucking shit app"

// }, (error, post) => {

//   console.log(error, post)

// })





// Post.create({
//
//     title: 'Mys first blog post',
//     description: 'posst dessdscription',
//     content: 'Losrem Ipsum Dipsum'
//
// }, (error, post) => {
//
//     console.log(error, post);
//
// })
