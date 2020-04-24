'use strict'

const monogoose = require('mongoose');
const Schema = monogoose.Schema

const CursoSchema = Schema({
    _id : Number,
    nombre: String,
    id_Profesor : Number,
    id_Alumno : Number
})

module.exports = monogoose.model('Cursos',CursoSchema)