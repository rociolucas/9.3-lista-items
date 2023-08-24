let elementos = [];

function agregar() {
    let texto = document.getElementById("item").value;
    elementos.push(texto)
    localStorage.setItem('contenidos',JSON.stringify(elementos));

    let container = ""
    
    for (let punto of elementos) {
        container += `<li>${punto}</li>`
    }
    document.getElementById("contenedor").innerHTML = container

    document.getElementById("item").value = "";
}

function limpiar() {
    let container = document.getElementById("contenedor");
    container.innerHTML = "";
    localStorage.removeItem("contenidos");
}


