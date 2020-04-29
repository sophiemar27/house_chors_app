const express = require('express')
const userModel = require('../models/User.js')

const userRouter = express.Router()

//GET ALL USERS
userRouter.get('/', (req, res) => {
    userModel.getAllUsers()
        .then((allUsers) => {
            res.render('user/allUsers' , {allUsers})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//CREATE NEW USER 
userRouter.get('/new', (req, res) => {
    res.render('user/createUser')
})

//EDIT USER FORM
userRouter.get('/:id/edit', (req, res) => {
    userModel.getOneUser(req.params.id)
        .then((singleUser) => {
            res.render('user/editUser', {singleUser})
        })
        .then(err => {
            console.log(err)
            res.json(err)
        })
})

//GET ONE USER 
userRouter.get('/:id', (req, res) => {
    userModel.getOneUser(req.params.id)
        .then((singleUser) => {
            res.render('user/singleUser', {singleUser})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//CREATE 
userRouter.post('/', (req, res) => {
    userModel.createUser(req.body)
        .then(() => {
            res.redirect('/user')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
userRouter.put('/:id', (req, res) => {
    userModel.updateUser(req.params.id, req.body)
        .then(() => {
            res.json('Ok')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//DELETE 
userRouter.delete('/:id', (req, res) => {
    userModel.deleteUser(req.params.id)
        .then(() => {
            res.redirect('/user')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = userRouter