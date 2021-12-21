const axios = require('axios');
var {Consultadb} = require('../model/model');

// create y enviar solicitud de transaccion
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    
    //banco banda
    /*axios.post("https://deerbank.herokuapp.com/transfer/", {
        "destiny_account": req.body.destiny_account,
        "origin_account": req.body.origin_account,
        "cvv": req.body.cvv,
        "exp_date": "12/24",
        "ammount": req.body.ammount
    },
    {
        headers: {
        Authorization: "Token 7c06d1ce8d6d8789d2f97d139b95b33751766246"
    }
    })

    .then(data => {
        
        //guardar datos pago en consulta
        const consulta = new Consultadb({
            EdoTransaccion: data.data.status,
            idTransaccion: data.data.transaction_num,
            Monto: data.data.ammount,
            Fecha: data.data.date
        })

        // save consulta in the database
        consulta
            .save(consulta)
            .then(data =>{

                res.status(200).send({
                    message: "Transacción Aceptada - DeerBank"
                });
            })
            .catch(err =>{
                res.status(500).send({
                    message: err.message || "Some error ocurred while creating a create operationssss"
                });
            });
        
    })
    .catch(error =>{
        res.status(500).send({
            message: error.message || "Some error ocurred while creating a create operation"
        });
        console.error(error);
    })*/


   

    //JSON solicitud transaccion banco irvin BanCoppel
    axios 
    .post('https://api-bancoppel-transferencia.herokuapp.com/transacciones', {
        IdTarjetaOrigen: req.body.IdTarjetaOrigen,
        IdTarjetaDestino: req.body.IdTarjetaDestino,
        ccv: req.body.ccv,
        TipoTransaccion: req.body.TipoTransaccion,
        Motivo: req.body.Motivo,
        Monto: req.body.Monto,
        Fecha: req.body.Fecha,
    })
    .then(data => {

        res.status(200).send({
            message: "Transacción Aceptada - BanCoppel"
        });

        console.log(`statusCode: ${res.status}`);

        /*
        const consulta = new Consultadb({
            EdoTransaccion: data.data.status,
            idTransaccion: data.data.transaction_num,
            Monto: data.data.ammount,
            Fecha: data.data.date
        })*/

        // save consulta in the database
        //consulta
            //.save(consulta)
            //.then(data =>{

                
            //})
            
    })
    .catch(error =>{
        res.status(500).send({
            message: error.message || "Some error ocurred while creating a create operation"
        });
        console.error(error);
    })
    
}