console.log('Archivo js.js cargado correctamente');

function obtenerFrutas() {
    fetch('http://localhost:8000/api/frutas') 
        .then(response => {
            console.log('Estado de la respuesta:', response.status); 
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Datos recibidos:', data); 
            const frutasList = document.getElementById('frutas-list');
            frutasList.innerHTML = ''; 

            if (Array.isArray(data) && data.length > 0) {
                data.forEach(fruta => {
                    const { nombre = 'Desconocido', cantidad = 'N/A' } = fruta;

                    const frutaElement = document.createElement('div');
                    frutaElement.innerHTML = `<strong>${nombre}</strong> - Cantidad: ${cantidad}`;
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

obtenerFrutas();
