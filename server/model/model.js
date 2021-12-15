const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nombreMascota: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    fecha: String,
    hora: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    servicio: String
})


const Agendadb = mongoose.model('agendadb', schema);

module.exports = Agendadb;
