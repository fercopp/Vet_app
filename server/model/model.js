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

var schemaConsulta = new mongoose.Schema({
    EdoTransaccion:{
        type: String
    },
    idTransaccion:{
        type: String
    },
    cvv:{
        type: String
    },
    Monto:{
        type: String
    },
    Fecha:{
        type: String
    },
    TipoTransaccion:{
        type: String
    },
})

const Agendadb = mongoose.model('agendadb', schema);
const Consultadb = mongoose.model('consultadb', schemaConsulta);

module.exports = Agendadb;
module.exports = Consultadb;
