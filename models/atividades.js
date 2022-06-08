const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    titulo: String,
    data: Date,
    tipo: String,
    entrega: String,
    disciplina: String,
    instrucoes: String,
    usuario: String
})

const atividades = mongoose.model('atividades',modelo)

module.exports = atividades