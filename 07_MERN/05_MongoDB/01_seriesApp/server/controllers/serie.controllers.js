const Series = require('../models/serie.models')

const obtenerSeries = (req, res) => {
    Series.find(req.body)
    .then((resultado) => {
        res.json(resultado)
    }).catch((error) => {
        console.log(error)
    })
} 

const obtenerUnaSerie = (req, res) => {
    Series.findById(req.body)
    .then((resultado) => {
        res.json(resultado)
    }).catch((error) => {
        console.log(error)
    })
} 

const crearSerie = (req, res) => {
    Series.create(req.body)
    .then((resultado) => {
        res.json(resultado)
    }).catch((error) => {
        console.log(error)
    })
}

const editarSerie = (req, res) => {
    Series.updateOne({_id: req.params.id}, req.body)
    .then((resultado) => {
        console.log(resultado)
        res.json(resultado)
    }).catch((error) => {
        console.log(error)
    })
} 

const eliminarSerie = (req, res) => {
    Series.updateOne({_id: req.params.id}, req.body)
    .then((resultado) => {
        res.json(resultado)
    }).catch((error) => {
        console.log(error)
    })
} 

module.exports = {
    obtenerSeries, 
    obtenerUnaSerie,
    crearSerie,
    editarSerie,
    eliminarSerie
}