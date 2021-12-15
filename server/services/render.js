
const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //Make a get request to /api/citas CAMBIE DE LOCALHOST
    axios.get('https://sistema-vet-api.herokuapp.com/api/citas')
    .then(function(response){
        res.render('index', {citas: response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_cita = (req,res)=>{
    res.render('add_cita');
}

exports.update_cita = (req, res)=>{
    axios.get('https://sistema-vet-api.herokuapp.com/api/citas',{ params : { id:req.query.id}})
    .then(function(citadata){
        res.render("update_cita", { cita : citadata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_pago = (req,res)=>{
    res.render('add_pago');
}