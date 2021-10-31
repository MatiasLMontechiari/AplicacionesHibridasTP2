import dao from '../models/testimonios.dao.js'

function viewPublic(req, res) {
    dao.findAll()
        .then(function (testimonios) {
            res.render('list-testimonios', {
                list: testimonios
            })
        })
        .catch(function (err) {
            res.status(500).json({ err: 500, msg: err.message })
        })
}

export function formNuevoTestimonio(req, res) {
    res.render("formNuevoTestimonio", {})
}

export function crearTestimonio(req, res) {
    const tes = req.body

    if (tes.public === 'true') {
        tes.public = true
    } else {
        tes.public = false
    }

    dao.insert(tes)
    .then(function (data) {
        tes.id = data.insertedId
        res.render("testimonio", tes)
    })
    .catch(function (err) {
        res.status(500)
        res.json({ err: 500, msg: err.message })
    })
}

export default {
    viewPublic,
    formNuevoTestimonio,
    crearTestimonio
}