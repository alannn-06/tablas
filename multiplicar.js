function generarTablas(){ 
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>"

    let contenido = "";
    let nombreTabla = document.getElementById("nombreTabla");
    nombreTabla.innerHTML = "<h1>TABLA DEL 5</h1>";
    for(let i=1; i<=10; i++){
        contenido = contenido +"<p>"+"5 x "+ i +" = "+(5*i) +"</p>"
    }
    contenedor.innerHTML = contenido;
} 