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
        required: true
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

var schemaReceta = new mongoose.Schema({
    peso:{
        type: String
    },
    rp:{
        type: String
    }
})


const Agendadb = mongoose.model('agendadb', schema);
const Consultadb = mongoose.model('consultadb', schemaConsulta);
const Recetadb = mongoose.model('recetadb', schemaReceta);

module.exports = {Agendadb, Consultadb, Recetadb}

