'use strict'

const monogoose = require('mongoose');
const Schema = monogoose.Schema

const NotaSchema = Schema({
    nombre: String,
    id_Alumno : Number,
    tipo: String,
    nota: Number
})

module.exports = monogoose.model('Nota',NotaSchema)