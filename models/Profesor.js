'use strict'

const monogoose = require('mongoose');
const Schema = monogoose.Schema

const ProfesorSchema = Schema({
    _id : Number,
    nombre: String,
    edad : Number,
})

module.exports = monogoose.model('Profesor',ProfesorSchema)