const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw() 
        return next() 
    } catch (err) {
        res.status(403) 
        res.send(err)
        console.error("La validación ha fallado")
    }
}

module.exports = validateResults