const express = require('express');
const server = express();


const projectsRouter = require('./routes/projects-router')
const actionsRouter = require('./routes/actions-router')
// import custom logger middleware

// server.use helmet
// server.use logger
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)


server.get('/', (req, res) => {
  res.send('server is operational baby')
})


module.exports = server