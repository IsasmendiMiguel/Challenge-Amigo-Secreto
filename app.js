function agregarAmigo() {
    // Obtener el valor del input
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim(); // Eliminar espacios en blanco

    // Expresión regular para verificar que solo contenga letras
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    // Verificar que el campo no esté vacío y que solo contenga letras
    if (nombreAmigo && soloLetras.test(nombreAmigo)) {
        // Crear un nuevo elemento de lista
        const listaAmigos = document.getElementById('listaAmigos');
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreAmigo; // Asignar el nombre al nuevo elemento

        // Agregar el nuevo amigo a la lista
        listaAmigos.appendChild(nuevoAmigo);

        // Limpiar el campo de entrada
        amigoInput.value = '';
    } else {
        alert('Por favor, ingresa un nombre válido (solo letras).');
        amigoInput.value = ''; // Limpiar el campo de entrada si no es válido
    }
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.getElementsByTagName('li')); // Obtener todos los amigos como un array

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Seleccionar un amigo al azar
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    // Mostrar el amigo seleccionado en el área de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoAleatorio}</li>`; // Mostrar el nombre en la lista de resultados

    
}

function reiniciarSorteo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el área de resultados

    // Detener cualquier intervalo en curso
    if (intervalo) {
        clearInterval(intervalo);
    }
}