const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/series', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Se estableció conexion a la db'))
    .catch(()=> console.log('Ocurrio un error conectando a la db', err)); 