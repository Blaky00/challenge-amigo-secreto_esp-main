// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombreAmigos = [];




function agregarAmigo(){


    let nombreUsuario = document.getElementById('amigo').value
    let listaNombres = document.getElementById('listaAmigos')

    if (nombreUsuario !== "") { // Verificamos que el usuario haya ingresado un nombre
        nombreAmigos.push(nombreUsuario); // Agregamos el nombre al array
        console.log(nombreAmigos);
        
        

        // Limpiamos la lista antes de actualizarla
        listaNombres.innerHTML = ""; 

        // Recorremos el array y creamos un <li> para cada nombre
        nombreAmigos.forEach((nombre) => {
            const li = document.createElement("li"); // Creamos un nuevo elemento <li>
            li.textContent = nombre; // Asignamos el nombre como texto del <li>
            listaNombres.appendChild(li); // Agregamos el <li> a la lista <ul>
        });

        document.getElementById('amigo').value = ""; // Limpiamos el input despues de agregar el nombre
    } else {
        alert("Por favor, ingresa un nombre."); // Mostramos una alerta si el campo está vacío
    }
   

    
}



function sortearAmigo(){

    if (nombreAmigos.length === 0) {
        //alert("La lista está vacía. Agrega amigos antes de elegir.");
        document.getElementById("resultado").textContent = "No hay amigos para sortear, agrega nuevos";
        return;
    }

    // Obtener un nombre aleatorio por dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);

    // Obtener el nombre seleccionado
    //let amigoSorteado = nombreAmigos[indiceAleatorio];
    
    // Obtener el nombre seleccionado y eliminarlo del array
    let amigoSorteado = nombreAmigos.splice(indiceAleatorio, 1)[0];

    // Mostrarlo en el HTML (puedes añadir un <p id="amigoSeleccionado"></p> en tu HTML)
    document.getElementById("resultado").textContent = `🎉 Amigo elegido: ${amigoSorteado}`;
    


}

