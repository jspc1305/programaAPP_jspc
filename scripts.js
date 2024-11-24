// Mostrar la sección seleccionada
function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach((section) => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Cambiar la imagen del Dashboard
function saveDashboardImage() {
    const input = document.getElementById('dashboardImageInput');
    const dashboardImage = document.getElementById('dashboardImage');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            dashboardImage.src = e.target.result; // Actualizar la imagen
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Mostrar la primera sección al cargar
document.addEventListener('DOMContentLoaded', () => {
    showSection('section1');
});

// Lógica para agregar nuevas descripciones de situaciones
document.getElementById('addSituacionBtn').addEventListener('click', function () {
    // Crear nuevo contenedor de situación
    const situacionGroup = document.createElement('div');
    situacionGroup.className = 'remove-problem-btn p-4 rounded border space-y-4 relative';

    // Crear el botón "x" dinámicamente
    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-2 right-2 bg-red-500 text-white p-1';
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', function () {
        situacionGroup.remove(); // Eliminar el cuadro de descripción
    });

    // Crear el área de texto para la descripción
    const descriptionDiv = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = "Descripción de la Situación";
    descriptionLabel.className = 'block text-sm font-semibold mb-2';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.className = 'input w-full resize-y';
    descriptionTextarea.rows = 3;
    descriptionTextarea.placeholder = "Descripción de la situación...";

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionTextarea);

    // Crear el botón para agregar problemas
    const addProblemButton = document.createElement('button');
    addProblemButton.type = 'button';
    addProblemButton.className = 'btn bg-green-500 hover:bg-green-600 text-white add-problem-btn';
    addProblemButton.textContent = 'Agregar más problemas';

    // Crear el contenedor de problemas
    const problemasContainer = document.createElement('div');
    problemasContainer.className = 'problemas-container space-y-4';

    // Crear la lista desplegable de problemas
    const listaDiv = document.createElement('div');
    const listaLabel = document.createElement('label');
    listaLabel.textContent = "Lista de Problemas de esta situación";
    listaLabel.className = 'block text-sm font-semibold mb-2';
    const listaSelect = document.createElement('select');
    listaSelect.className = 'input w-full problemas-lista';
    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Selecciona un problema";
    listaSelect.appendChild(defaultOption);

    listaDiv.appendChild(listaLabel);
    listaDiv.appendChild(listaSelect);

    // Función para actualizar la lista desplegable
    function updateProblemasList() {
        // Limpiar lista actual
        listaSelect.innerHTML = '<option disabled selected>Selecciona un problema</option>';

        // Agregar los textos de los cuadros de problemas
        Array.from(problemasContainer.querySelectorAll('textarea.problem-textarea')).forEach(textarea => {
            const text = textarea.value.trim();
            if (text !== '') {
                const option = document.createElement('option');
                option.value = text;
                option.textContent = text;
                listaSelect.appendChild(option);
            }
        });
    }

    // Agregar evento al botón "Agregar más problemas"
    addProblemButton.addEventListener('click', function () {
        // Crear nuevo cuadro de problema
        const problemGroup = document.createElement('div');
        problemGroup.className = 'problem-group';

        // Crear el contenido del cuadro
        const problemTextarea = document.createElement('textarea');
        problemTextarea.className = 'input w-full resize-y mb-2 problem-textarea';
        problemTextarea.rows = 2;
        problemTextarea.placeholder = "Escribir los problemas resultantes de la problematización anterior.";
        const removeProblemButton = document.createElement('button');
        removeProblemButton.type = 'button';
        removeProblemButton.className = 'btn bg-red-500 hover:bg-red-600 text-white text-sm remove-problem-btn';
        removeProblemButton.textContent = 'Eliminar problema';

        // Evento para eliminar problema
        removeProblemButton.addEventListener('click', function () {
            problemGroup.remove(); // Eliminar el cuadro de problema
            updateProblemasList(); // Actualizar la lista desplegable
        });

        // Evento para actualizar la lista al escribir
        problemTextarea.addEventListener('input', updateProblemasList);

        // Agregar elementos al cuadro de problema
        problemGroup.appendChild(problemTextarea);
        problemGroup.appendChild(removeProblemButton);

        // Agregar el cuadro al contenedor de problemas
        problemasContainer.appendChild(problemGroup);

        // Actualizar la lista desplegable
        updateProblemasList();
    });

    // Agregar todos los elementos al contenedor de situación
    situacionGroup.appendChild(closeButton);
    situacionGroup.appendChild(descriptionDiv);
    situacionGroup.appendChild(addProblemButton);
    situacionGroup.appendChild(problemasContainer);
    situacionGroup.appendChild(listaDiv);

    // Añadir la nueva situación al contenedor principal
    const situacionesContainer = document.getElementById('situacionesContainer');
    situacionesContainer.appendChild(situacionGroup);
});
