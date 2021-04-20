const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const savePost = new Interior(req.body)
})