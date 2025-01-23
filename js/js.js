console.log('Archivo js.js cargado correctamente');

function obtenerFrutas() {
    fetch('http://localhost:8000/api/frutas') // Cambia la URL si usas otro puerto o ruta
        .then(response => {
            console.log('Estado de la respuesta:', response.status); // Ver el estado de la respuesta
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            console.log('Datos recibidos:', data); // Mostrar los datos recibidos en consola
            const frutasList = document.getElementById('frutas-list');
            frutasList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos datos

            if (Array.isArray(data) && data.length > 0) {
                data.forEach(fruta => {
                    // Verifica que las propiedades existan antes de usarlas
                    const { nombre = 'Desconocido', color = 'No especificado', precio = 'N/A' } = fruta;

                    const frutaElement = document.createElement('div');
                    frutaElement.innerHTML = `<strong>${nombre}</strong> - ${color} - $${precio}`;
                    frutasList.appendChild(frutaElement);
                });
            } else {
                frutasList.innerHTML = '<p>No se encontraron frutas.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener las frutas:', error);

            const frutasList = document.getElementById('frutas-list');
            frutasList.innerHTML = '<p>Error al cargar las frutas. Por favor, intenta nuevamente más tarde.</p>';
        });
}

// Llamamos a la función al cargar la página
obtenerFrutas();
