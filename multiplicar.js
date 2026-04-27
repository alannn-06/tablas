function generarTablas() {
    
    let contenedor = document.getElementById("contenedorTabla");
    let input = document.getElementById("inputNumero");
    let tituloTabla = document.getElementById("nombreTabla");
    
    let numero = parseInt(input.value);

    if (isNaN(numero)) {
        alert("Por favor, escribe un número primero ");
        return;
    }

    tituloTabla.innerText = "Tabla del " + numero;

    let contenido = "";
    
    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila"><span>${numero} x ${i}</span><span>=</span><span>${numero * i}</span></div>`;
    }

    contenedor.innerHTML = contenido;
}