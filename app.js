// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; // Array para almacenar los nombres

// Función para agregar un nombre al array
  function agregarAmigo() {
    const input = document.getElementById('amigo'); // Campo de texto
    const nombre = input.value.trim(); // Limpia espacios adicionales

    if (nombre !== '') {
      amigos.push(nombre); // Añade el nombre al array
      actualizarLista(); // Llama a la función para renderizar la lista

      input.value = ''; // Limpia el campo
      input.focus(); // Devuelve el enfoque al campo de texto
    } else {
      alert('Por favor, ingresa un nombre válido.'); // Muestra alerta si el input está vacío
    }
  }

// Función para actualizar la lista en el HTML
    function actualizarLista() {
        const lista = document.getElementById('listaAmigos'); // Referencia al <ul>
        lista.innerHTML = ''; // Limpia la lista actual usando innerHTML
  
        amigos.forEach((amigo) => {
          lista.innerHTML += `<li>${amigo}</li>`; // Añade un <li> por cada amigo en el array
        });
      }

// Función para seleccionar un amigo aleatorio del array
    function sortearAmigo() {
        if (amigos.length === 0) {
          alert('La lista de amigos está vacía. Agrega al menos un amigo primero.');
          return;
        }
  
        const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
        const amigoAleatorio = amigos[indiceAleatorio]; // Nombre aleatorio basado en el índice
  
        const display = document.getElementById('resultado'); // Referencia al <p>
        display.textContent = `Amigo seleccionado: ${amigoAleatorio}`; // Muestra el nombre en pantalla
      }
      