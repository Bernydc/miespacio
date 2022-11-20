 /*se agregar alerta al presionar boto enviar */ 
$(document).ready(function(){ 
    $('#botonEnviar').click(function(){
         alert("Se envio el mensaje correctamente");
      
    })
})

 /*se agrega color al navbar bg dark al hacer scroll  */ 
$(window).scroll(function(){ 
    if($("#menu").offset().top > 56){
        $("#menu").addClass("bg-dark");
        
    }
    else{
        $("#menu").removeClass("bg-dark");
    }
})