const express = require('express');
const server = express();

const helmet = require('helmet')

const projectsRouter = require('./routes/projects-router')
const actionsRouter = require('./routes/actions-router')
const logger = require('./middleware/logger')


// server.use(logger())
server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)


server.get('/', (req, res) => {
  res.send('server is operational baby')
})


module.exports = server