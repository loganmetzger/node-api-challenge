const express = require('express')

const router = express.Router()
const Actions = require('../data/helpers/actionModel')
const Projects = require('../data/helpers/projectModel')

router.get('/', (req, res) => {
    Actions.get()
        .then(actions => {
            res.status(200).json({ data: actions })
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params
    Actions.get(id)
        .then(action => {
            if(!action) {
                res.status(404).send('This action does not exist')
            } else {
                res.status(200).json({ data: action })
            }
        })
        .catch(err => {
            res.status(500).json({ err: 'server error' })
        })
})

router.post()

function validatePost(req, res, next) {
    let id = req.body.project_id;
    Actions.get(id)
        .then(action => {
            if(!action) {
                res.status(404).json({ message: 'action does not exist'})
            } else
        })
}