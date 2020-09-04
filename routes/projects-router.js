const express = require('express')
const router = express.Router()

const Projects = require('../data/helpers/projectModel')

// Get all projects
router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json({ data: projects })
        })
        .catch(err => {
            res.status(500).json({ err: "serer error" })
        })
})

// Get project by id
router.get('/:id', (req, res) => {
    const id = req.params.id
    Projects.get(id)
        .then(project => {
            if(!project) {
                res.status(404).json({ message: "resource not found" })
            } else {
                res.status(200).json({ data: project })
            }
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

// Get all actions by project id
router.get('/:id/actions', (req, res) => {
    const id = req.params.id
    Projects.getProjectActions(id)
        .then(actions => {
            if(!project) {
                res.status(404).json({ message: "resource not found" })
            } else {
                res.status(200).json({ data: actions })
            }
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

// Post project
router.post('/', validateProject, (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(200).json({ data: project })
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

// Put project
router.put('/:id', validateProject, (req, res) => {
    const id = req.params.id
    Projects.update(id, req.body)
        .then(project => {
            res.status(201).json({ data: project })
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

// delete project
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Projects.remove(id)
        .then(project => {
            res.status(200).json({ message: "successfully deleted project" })
        })
        .catch(err => {
            res.status(500).json({ err: "server error" })
        })
})

// Post validation MW
function validateProject(req, res, next) {
    if(!req.body){
        res.status(400).json({ err: "please include post body" })
    } else if(!req.body.name) {
        res.status(400).json({ err: "please include post name" })
    } else if(!req.body.description) {
        res.status(400).json({ err: "please include post description" })
    } else {
        next()
    }
}

module.exports = router;