const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    image: String,
})

const userCollection = mongoose.model('user', userSchema)

//GET ALL
function getAllUsers() {
    return userCollection.find()
}

//GET ONE USER
function getOneUser(id) {
    return userCollection.findById(id)
}
//CREATE
function createUser(newUser) {
    return userCollection.create(newUser)
}
//UPDATE
function updateUser(id, newUser) {
    return userCollection.findByIdAndUpdate(id, newUser)
}
//DELETE
function deleteUser(id) {
    return userCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}