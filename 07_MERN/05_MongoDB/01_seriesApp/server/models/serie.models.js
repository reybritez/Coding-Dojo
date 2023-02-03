const { timeStamp } = require('console')
const mongoose = require('mongoose')

//Schema
const SerieSchema = mongoose.Schema({
    title: {
        type:String
    },
    creador: {
        type: String
    },
    rating: {
        type:String,
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17']
    },
    genero: {
        type: String,
        enum: [
            'Comedia',
            'Drama',
            'Horror',
            'Fantasia',
            'Sci-fi',
            'Accion',
            'Familiar'
        ]
    },
    year: {
        type: Number
    },
    portada: {
        type: String
    }
},{timeStamps:true})

const Series = mongoose.model('Series', SerieSchema)
module.exports = Series