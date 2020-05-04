const express = require('express')
const choreModel = require('../models/Chore.js')
const commentModel = require('../models/Comment.js')

const choreRouter = express.Router()

//GET ALL CHORES
choreRouter.get('/', (req, res) => {
    choreModel.getAllChores()
        .then((allChores) => {
            res.render('chore/allChores', {allChores})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//CREATE NEW CHORE 
choreRouter.get('/new', (req, res) => {
    res.render('chore/createChore')
})

//EDIT CHORE FORM
choreRouter.get('/:id/edit', (req, res) => {
    choreModel.getOneChore(req.params.id)
        .then((singleChore) => {
            res.render('chore/editChore', {singleChore})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// //GET ONE CHORE 
// choreRouter.get('/:id', (req, res) => {
//     choreModel.getOneChore(req.params.id)
//         .then((singleChore) => {
//             res.render('chore/singleChore', {singleChore})
//         })
//         .catch(err => {
//             console.log(err)
//             res.json(err)
//         })
// })

choreRouter.get('/:id', async (req, res) => {
    console.log('choreRouter.GET one route')
    try {
        const singleChore = await choreModel.getOneChore(req.params.id)
        const comments = await commentModel.getAllCommentsByChoreId(req.params.id)

        res.render('chore/singleChore', {singleChore, comments})
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

//CREATE 
choreRouter.post('/', (req, res) => {
    choreModel.createChore(req.body)
        .then(() => {
            res.redirect('/chore')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
choreRouter.put('/:id', (req, res) => {
    choreModel.updateChore(req.params.id, req.body)
        .then(() => {
            res.redirect('/chore')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//DELETE 
choreRouter.delete('/:id', (req, res) => {
    choreModel.deleteChore(req.params.id)
        .then(() => {
            res.redirect('/chore')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = choreRouter