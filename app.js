    
 // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 // Declaramos un array vacío para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value; // Obtenemos el valor del campo de texto

  // Verificamos si el campo está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre."); // Si está vacío, mostramos un mensaje de alerta
  } else {
    amigos.push(nombre); // Si no está vacío, agregamos el nombre al array de amigos
    document.getElementById("amigo").value = ""; // Limpiamos el campo de texto después de agregarlo
    mostrarAmigos(); // Actualizamos la lista de amigos mostrada en la página
  }
}

// Función para mostrar la lista de amigos en la página
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla

  amigos.forEach(function(amigo) {
    let li = document.createElement("li"); // Creamos un nuevo elemento de lista
    li.textContent = amigo; // Establecemos el nombre del amigo como contenido del elemento de lista
    lista.appendChild(li); // Añadimos el nuevo elemento a la lista
  });
}

// Función para seleccionar un amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear."); // Si no hay amigos en el array, mostramos un mensaje
  } else {
    let aleatorio = Math.floor(Math.random() * amigos.length); // Seleccionamos un índice aleatorio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es: " + amigos[aleatorio]; // Mostramos el nombre del amigo seleccionado
  }
}
