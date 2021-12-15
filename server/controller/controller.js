const axios = require('axios');

var Agendadb = require('../model/model');


// create and save new cita
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    //new cita
    const cita = new Agendadb({
        name: req.body.name,
        nombreMascota: req.body.nombreMascota,
        raza: req.body.raza,
        edad: req.body.edad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        area: req.body.area,
        fecha: req.body.fecha,
        hora: req.body.hora,
        email: req.body.email,
        servicio: req.body.servicio
    })

    // save cita in the database
    cita
        .save(cita)
        .then(data =>{
            //res.send(data)
            res.redirect('/add-cita')
        })
        .catch(err =>{
            res.status(500).send({
                message: err.messague || "Some error ocurred while creating a create operation"
            });
        });

        
}

// retrieve and return all citas/ retrieve and return a single cita
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Agendadb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: "Not found cita with id " + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving cita with id" + id})
        })

    }else{
        Agendadb.find()
        .then(cita =>{
            res.send(cita)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "Error ocurred while retrieving user information"})
        })
    }

    Agendadb.find()
    .then(cita =>{
        res.send(cita)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error ocurred while retrieving user information"})
    })
}


//Update a new identified cita by cita id
exports.update = (req,res) =>{
    if(!req.body){
        return res 
            .status(400)
            .send({message: "Data to update can not be empty"})
    }

    const id = req.params.id;
    Agendadb.findByIdAndUpdate(id, req.body)
    .then(data =>{
        if(!data){
            res.status(404).send({message: `Cannot Update cita with ${id}. Maybe cita not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update cita information"})
    })
}

//Delete a cita with specified cita id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;

    Agendadb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message: "Cita was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete Cita with id=" + id
        });
    });
}