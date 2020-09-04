const logger = (req, res, next) => {
    console.log(`${req.method} to ${req.originalUrl} at ${new Date()}`)
    next()
}

module.exports = logger