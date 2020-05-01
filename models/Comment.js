const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const commentSchema = new Schema({
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
    createComment,
    updateComment,
    deleteComment
}