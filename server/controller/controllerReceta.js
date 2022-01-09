const axios = require('axios');

var {Recetadb} = require('../model/model');



// create and save new receta
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    //nueva receta
    const receta = new Recetadb({
        peso: req.body.peso,
        rp: req.body.rp
    })

    // save receta in the database
    receta
        .save(receta)
        .then(data =>{
            //res.send(data)
            res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error ocurred while creating a create operation"
            });
        });

        
        
}
