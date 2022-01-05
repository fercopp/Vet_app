const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    nombreMascota: {
        type: String
    },
    raza: {
        type: String
    },
    edad: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    area: {
        type: String
    },
    fecha: String,
    hora: String,
    email: {
        type: String
    },
    servicio: String,
    horaRecoleccion: String
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
        type: String
    },
    raza: {
        type: String
    },
    edad: {
        type: String
    }
})

var schemaCliente = new mongoose.Schema({
    name: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    email: {
        type: String
    },
})

var schemaAgenda = new mongoose.Schema({
    area: {
        type: String
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

