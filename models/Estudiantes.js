'use strict'

const monogoose = require('mongoose');
const Schema = monogoose.Schema

const EstudianteSchema = Schema({
    _id : Number,
    nombre: String,
    id_Registro : Number,
    curso : Number
})

module.exports = monogoose.model('Estudiante',EstudianteSchema)