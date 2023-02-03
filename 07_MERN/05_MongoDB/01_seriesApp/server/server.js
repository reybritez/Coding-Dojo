import express, { json } from 'express';

const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.listen(port, console.log(`Server started on port: ${port}`));

//Requerir archivo de configuracion
require('./config/mongoose.config')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
