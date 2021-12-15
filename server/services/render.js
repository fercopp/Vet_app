
const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //Make a get request to /api/citas
    axios.get('http://localhost:3000/api/citas')
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
    axios.get('http://localhost:3000/api/citas',{ params : { id:req.query.id}})
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