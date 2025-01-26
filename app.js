// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Varibales
let amigos = [];

// Funciones
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo !== '') {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

//Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpia la lista
    lista.innerHTML = '';

    // Itera sobre el arreglo 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento de lista <li>
        let li = document.createElement('li');

        // Asigna el nombre del amigo al texto del elemento de lista
        li.textContent = amigos[i];

        // Agrega el nuevo elemento a la lista en el DOM
        lista.appendChild(li);
    }
}