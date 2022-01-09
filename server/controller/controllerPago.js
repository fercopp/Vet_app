const axios = require('axios');
var {Consultadb} = require('../model/model');

// create y enviar solicitud de transaccion
exports.create = (req,res)=>{
    console.log(req.body);
    if(req.body.bancos == 'deerbank'){
        // validate request
        if(!req.body){
            res.status(400).send({message: "Content can not be empty!"});
            return;
        }
        //banco banda
        axios.post("https://deerbank.herokuapp.com/transfer/", {
            "destiny_account": "5527895529754521",
            "origin_account": req.body.IdTarjetaOrigen,
            "cvv": req.body.cvv,
            "exp_date": "12/24",
            "ammount": req.body.Monto //cambiar a Monto
        },
        {
            headers: {
            Authorization: "Token 6e9faf38892e195693cffa5aef173d7d3cc9aa08"
        }
        })

        .then(data => {
            
            //guardar datos pago en consulta
            const consulta = new Consultadb({
                EdoTransaccion: data.data.status,
                idTransaccion: data.data.transaction_num,
                Monto: data.data.ammount,
                Fecha: data.data.date,
                terminacionTj: req.body.IdTarjetaOrigen.slice(-4)
            })
            

            // save consulta in the database
            consulta
                .save(consulta)
                .then(data =>{
                    res.status(200).send({
                        message: "Transacción Aceptada - DeerBank"
                    });
                    //res.redirect("/");
                    
                    
                })
                .catch(err =>{
                    res.status(500).send({
                        message: err.message || "Some error ocurred while creating a create operationss"
                    });
                });
            
        })
        .catch(error =>{
            res.status(500).send({
                message: error.message || "Some error ocurred while creating a create operation"
            });
            console.error(error);
            console.log(error.response.data);
        })
    }else{

        //JSON solicitud transaccion banco irvin BanCoppel
        axios 
        .post('https://api-bancoppel-transferencia.herokuapp.com/transacciones', {
            IdTarjetaOrigen: req.body.IdTarjetaOrigen,
            IdTarjetaDestino: "5579100251520002",
            Cvv: req.body.cvv,
            TipoTransaccion: "3",
            Motivo: "Servicio Veterinario",
            Monto: req.body.Monto,
            Fecha: req.body.Fecha,
        })
        .then(data => {

            
            const consultaBancoppel = new Consultadb({
                EdoTransaccion: data.data.EstadoTrans,
                idTransaccion: data.data.IdTransaccion,
                Monto: data.data.Monto,
                Fecha: data.data.Fecha,
                terminacionTj: req.body.IdTarjetaOrigen.slice(-4)
            })
            // save consulta in the database
            consultaBancoppel
                .save(consultaBancoppel)
                .then(data =>{
                    res.status(200).send({
                        message: "Transacción Aceptada - BanCoppel"
                    });
                    
                })
                
        })
        .catch(error =>{
            res.status(500).send({
                message: error.message || "Some error ocurred while creating a create operation"
            });
            console.error(error);
        })
        
    }
  
}
