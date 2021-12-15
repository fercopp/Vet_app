const axios = require('axios');

// create y enviar solicitud de transaccion
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    
    axios.post("https://deerbank.herokuapp.com/transfer/", {
        "destiny_account": "5138100775916044",
        "origin_account": "5188642424182287",
        "cvv": "256",
        "exp_date": "12/24",
        "ammount": 100
    },
    {
        headers: {
        Authorization: "Token 7c06d1ce8d6d8789d2f97d139b95b33751766246"
    }
    })
    .then(data => {

        res.status(200).send({
            message: "Transacción Aceptada"
        });

        console.log(`statusCode: ${res.status}`);
    })
    .catch(error =>{
        console.error(error);
    })
   

    //JSON solicitud transaccion
    /*axios
    .post('http://api-bancoppel-transferencia.herokuapp.com/', {
        IdTarjetaOrigen: req.body.IdTarjetaOrigen,
        IdTarjetaDestino: req.body.IdTarjetaDestino,
        cvv: req.body.cvv,
        TipoTransaccion: req.body.TipoTransaccion,
        Motivo: req.body.Motivo,
        Monto: req.body.Monto,
        Fecha: req.body.Fecha,
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error =>{
        console.error(error);
    })*/
    
}