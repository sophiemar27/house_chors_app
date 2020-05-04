const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const choreSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    type: String,
    howOften: String,
    when: String,
})

const choreCollection = mongoose.model('chore', choreSchema)

//GET ALL
function getAllChores() {
    return choreCollection.find()
}

//GET ONE CHORE
function getOneChore(id) {
    return choreCollection.findById(id)
}

// GET BY FACILITY
function getAllChoresByUserId(userId) {
    return choreCollection.find({'userId': userId})
}

//CREATE
function createChore(newChore) {
    return choreCollection.create(newChore)
}
//UPDATE
function updateChore(id, newChore) {
    return choreCollection.findByIdAndUpdate(id, newChore)
}
//DELETE
function deleteChore(id) {
    return choreCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllChores,
    getOneChore,
    getAllChoresByUserId,
    createChore,
    updateChore,
    deleteChore
}