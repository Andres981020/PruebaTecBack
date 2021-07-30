//Andres Mosquera Alvarado

const express = require('express');
const morgan = require('morgan')
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(require('./jugadores'));


//Starting server
app.listen(3000, ()=>{
    console.log(('server on port 3000'));
});