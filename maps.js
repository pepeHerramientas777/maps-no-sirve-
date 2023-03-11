//api: son interfaces de programacion de aplicaciones, son construcciones disponibles en los lenguajes de  
//programacion que permiten a los desarrolladores crear funcionalidades complejas de una manera simple 

/* function son pequeña secuencias de codigo que nos premiten separarlo para poder reutilizarlo en cualquier momento que se ejecuten las instrucciones de nuestro programa,
sintaxis: function nombre de la funcion ()*/
function iniciarMap(){
var coord= {lat:2.6950675537275552, lng:2.6950675537275552};

//2.6950675537275552, -72.30981767652226
var map= new google.maps.Map(
    document.getElementById('map'),{
        zoom:10,
        center:coord
    });
    var marker=new google.maps.marker({
        position: coord,
        map: map

    });
}
