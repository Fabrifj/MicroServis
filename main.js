
//importamos conexiones
const Mongoose = require('./conexiones/mongoose')
const Express  = require('./conexiones/express')
//creamos 
const mongoose = new Mongoose('mongodb://localhost:27017/test');
const express = new Express();
//inicializamos
express.initialize();
mongoose.initialize();


