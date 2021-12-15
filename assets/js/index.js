

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
        "url" : `http://localhost:3000/api/citas/${data.id}`,
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
            "url" : `http://localhost:3000/api/citas/${id}`,
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