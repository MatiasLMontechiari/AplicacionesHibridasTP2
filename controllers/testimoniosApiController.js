import dao from '../models/testimonios.dao.js'
import { ObjectID } from 'bson'

function allTestimonios(req, res) {
    dao.findAll()
        .then(function(data){
            res.status(200).json(data)
        })
        .catch(function(err){
            res.status(500).json(err)
        })
}

function addTestimonio(req, res) {
    dao.insert(req.body)
        .then(function (data) {
            res.status(200).json({ code: 200, msg: `El testimonio #${data.insertedId} se dio de alta correctamente` })
        })
        .catch(function (err) {
            res.status(500)
            res.json({ code: 500, msg: err.message })
        })
}

function publicTestimonio(req, res) {

    const id = {_id: ObjectID(req.params.id)}
    const updateDoc =  { $set: { public: true } }
    const option = { upsert: false }

    dao.update(id, updateDoc, option)
        .then(function (data) {
            if (data.modifiedCount == 1) {
                res.status(200).json({ code: 200, msg: `El testimonio #${req.params.id} se ha hecho publico` })
            } else {
                res.status(404).json({ code: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ code: 500, msg: err.message })
        })
}

function replaceTestimonio(req, res) {
    
    const doc = req.body
    const id = {_id: ObjectID(req.params.id)}
    const updateDoc =  {$set:doc}
    const option = { upsert: false }

    dao.replace(id, updateDoc, option)
        .then(function (data) {
            if (data.modifiedCount == 1) {
                res.status(200).json({ code: 200, msg: `El testimonio #${req.params.id} se ha modificado correctamente` })
            } else {
                res.status(404).json({ code: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ code: 500, msg: err.message })
        })
}

function deleteTestimonio(req, res) {
    dao.deleteOne(req.params.id)
        .then(function (data) {
            if (data.deletedCount == 1) {
                res.status(200).json({ code: 200, msg: `El testimonio #${req.params.id} se elimino correctamente` })
            } else {
                res.status(404).json({ code: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
            }
        })
        .catch(function (err) {
            res.status(500)
            res.json({ code: 500, msg: err.message })
        })
}

export default {
    allTestimonios,
    addTestimonio,
    publicTestimonio,
    deleteTestimonio,
    replaceTestimonio
}