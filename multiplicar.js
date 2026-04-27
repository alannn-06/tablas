function generarTablas(){ 
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>"

    let contenido = "";
    for(let i=1; i<=10; i++){
        contenido = contenido +"<p>"+"5 x "+ i +" = "+(5*i) +"</p>"
    }
    contenedor.innerHTML = contenido;
} 