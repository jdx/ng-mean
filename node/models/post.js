var db = require('../mongo')

var Post = db.model('Post', {
  user_id:  { type: 'ObjectId', required: true },
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date, required: true, default: Date.now }
})

module.exports = Post
