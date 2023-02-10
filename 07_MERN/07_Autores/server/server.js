//Configuracion CORS
const cors = require('cors')

//Configuracion Express
const express = require('express')
const app = express()
const PORT = 8080

//CORS
app.use(cors({
    origin: 'http://localhost:3000'
}))

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuracion Base de Datos
require('./config/mongoose.config');

//Enrutamiento
const AuthorsRoutes = require('./routes/authors.routes');
AuthorsRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})