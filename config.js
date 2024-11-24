document.addEventListener('DOMContentLoaded', () => {
    const nivelEducativoSelect = document.getElementById('nivelEducativo');
    const faseSelect = document.getElementById('fase');
    const gradoSelect = document.getElementById('grado');

    // Función para actualizar las opciones de las listas de fase y grado
    function updateOptions() {
        // Limpiar las opciones actuales
        faseSelect.innerHTML = '';
        gradoSelect.innerHTML = '';

        // Condición según el nivel educativo
        if (nivelEducativoSelect.value === 'Primaria') {
            // Opciones para Fase en Primaria
            const fasesPrimaria = ['Fase 1', 'Fase 2'];
            fasesPrimaria.forEach(fase => {
                const option = document.createElement('option');
                option.value = fase;
                option.textContent = fase;
                faseSelect.appendChild(option);
            });

            // Opciones para Grado en Primaria
            const gradosPrimaria = ['1ro', '2do', '3ro', '4to', '5to', '6to'];
            gradosPrimaria.forEach(grado => {
                const option = document.createElement('option');
                option.value = grado;
                option.textContent = grado;
                gradoSelect.appendChild(option);
            });
        } else if (nivelEducativoSelect.value === 'Secundaria') {
            // Opciones para Fase en Secundaria
            const fasesSecundaria = ['Fase 3'];
            fasesSecundaria.forEach(fase => {
                const option = document.createElement('option');
                option.value = fase;
                option.textContent = fase;
                faseSelect.appendChild(option);
            });

            // Opciones para Grado en Secundaria
            const gradosSecundaria = ['1ro', '2do', '3ro'];
            gradosSecundaria.forEach(grado => {
                const option = document.createElement('option');
                option.value = grado;
                option.textContent = grado;
                gradoSelect.appendChild(option);
            });
        }
    }

    // Ejecutar la función de actualización al cambiar el nivel educativo
    nivelEducativoSelect.addEventListener('change', updateOptions);

    // Ejecutar al cargar la página para inicializar las opciones según la selección actual
    updateOptions();
});

