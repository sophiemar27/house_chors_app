const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: String,
    comment: String
})

const commentCollection = mongoose.model('comment', commentSchema)

//GET ALL
function getAllComments() {
    return commentCollection.find()
}

//GET ONE comment
function getOneComment(id) {
    return commentCollection.findById(id)
}

// GET BY User
function getAllCommentsByUserId(userId) {
    return commentCollection.find({'userId': userId})
}

//CREATE
function createComment(newComment) {
    return commentCollection.create(newComment)
}
//UPDATE
function updateComment(id, newComment) {
    return commentCollection.findByIdAndUpdate(id, newComment)
}
//DELETE
function deleteComment(id) {
    return commentCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllComments,
    getOneComment,
    getAllCommentsByUserId,
    createComment,
    updateComment,
    deleteComment
}