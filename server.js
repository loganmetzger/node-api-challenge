const express = require('express');
const server = express();


// import routers
// import helmet
// import custom logger middleware

// server.use helmet
// server.use logger
// server.use express.json()

// server.use(./router, router)
// for both routers

server.get('/', (req, res) => {
  res.send('server is operational baby')
})


module.exports = server