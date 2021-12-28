
$("#add_cita").submit(function(event){
    alert("Los datos fueron guardados con éxito")
})

$("#update_cita").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `https://sistema-vet-api.herokuapp.com/api/citas/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Datos actualizados exitosamente");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://sistema-vet-api.herokuapp.com/api/citas/${id}`,
            "method" : "DELETE",
        }

        if(confirm("¿Deseas borrar esta cita?")){
            $.ajax(request).done(function(response){
                alert("Datos borrados exitosamente");
                location.reload()
            })
        }
    })
}

var total = 300;
function CalculateTotal(){
    $("input:checkbox").each(function(){
        if($(this).is(":checked")){
            total += parseFloat($(this).val());
        }
    });
    $("#costo").html('$'+total);
    document.getElementById("Monto").value = String(total);
}

$("input:checkbox").change(function(){
    total = 300;
    CalculateTotal();
}).trigger("change");

function getSelectValue(){
    var selectedValue = document.getElementById("bancos").value;
}

$("#add_cita").submit(function(event){
    alert("Los datos fueron guardados con éxito")
})

/*$("#add_pago").submit(function(event){
    alert("Transacción solicitada")
    
})*/

$("#add_pago").submit(function(event){
    if(document.getElementById("bancos").value =='deerbank'){
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {}
        
        $.map(unindexed_array,function(n,i){
            data[n['name']] = n['value']
        })
    
        //console.log(data)
        
        var request = {
            "url" : `https://sistema-vet-api.herokuapp.com/api/pagos`,
            "method" : "POST",
            "data" : data
        }
    
        $.ajax(request).done(function(response){
            alert("Transacción con éxito - deerbank");
        })
    }else{
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {}
        
        $.map(unindexed_array,function(n,i){
            data[n['name']] = n['value']
        })
    
        //console.log(data)
        
        var request = {
            "url" : `https://sistema-vet-api.herokuapp.com/api/pagos`,
            "method" : "POST",
            "data" : data
        }
    
        $.ajax(request).done(function(response){
            alert("Transacción con éxito - bancoppel");
        })
    }
    
})
