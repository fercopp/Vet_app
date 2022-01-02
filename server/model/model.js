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
    terminacionTj:{
        type: String
    }
})

var schemaReceta = new mongoose.Schema({
    peso:{
        type: String
    },
    rp:{
        type: String
    },
})

var schemaMascota = new mongoose.Schema({
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
    }
})

var schemaCliente = new mongoose.Schema({
    name: {
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
    email: {
        type: String,
        required: true
    },
})

var schemaAgenda = new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    fecha: String,
    hora: String,
    servicio: String
})

const Agendadb = mongoose.model('agendadb', schema);
const Consultadb = mongoose.model('consultadb', schemaConsulta);
const Recetadb = mongoose.model('recetadb', schemaReceta);

const Mascotadb = mongoose.model('mascotadb', schemaMascota);
const Clientedb = mongoose.model('clientedb', schemaCliente);
const Agenda_db = mongoose.model('agenda_db', schemaAgenda);

module.exports = {Agendadb, Consultadb, Recetadb, Mascotadb, Clientedb, Agenda_db}

