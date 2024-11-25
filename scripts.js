let planoIdCounter = 0; // Contador global para asignar IDs únicos

// Mostrar la sección seleccionada
function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach((section) => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Mostrar la primera sección al cargar
document.addEventListener('DOMContentLoaded', () => {
    showSection('section1');
});

// Crear una nueva ventana "Descripción del Tema" en "Plano de la Realidad"
document.getElementById('addPlanoBtn').addEventListener('click', () => {
    createPlano();
});

// Función para crear una nueva ventana "Descripción del Tema"
function createPlano() {
    planoIdCounter++; // Incrementar contador para asignar un nuevo ID

    const section1 = document.getElementById('section1');

    // Contenedor principal de la ventana
    const planoContainer = document.createElement('div');
    planoContainer.className = 'plano-container border rounded shadow-lg p-4 space-y-4';
    planoContainer.id = `plano-${planoIdCounter}`;

    // Encabezado colapsable
    const header = document.createElement('div');
    header.className = 'flex justify-between items-center cursor-pointer';
    header.innerHTML = `
        <h3 class="text-lg font-semibold">Descripción del Tema</h3>
        <button class="btn bg-gray-300 text-black px-2 py-1 toggle-collapse">-</button>
    `;

    // Contenido colapsable
    const content = document.createElement('div');
    content.className = 'plano-content space-y-6';

    // Botón de eliminar ventana
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn bg-red-500 hover:bg-red-600 text-white';
    deleteButton.textContent = 'Eliminar ventana';
    deleteButton.addEventListener('click', () => {
        planoContainer.remove();
    });

    // Crear descripción del tema
    const descripcionDiv = document.createElement('div');
    descripcionDiv.innerHTML = `
        <label class="block text-sm font-semibold mb-2">Descripción del Tema</label>
        <textarea 
            id="descripcionTema-${planoIdCounter}"
            placeholder="Son elementos que facilitan la descripción del tema..." 
            rows="5"
            class="input w-full resize-y"></textarea>
    `;

    // Diferenciador visual
    const hr = document.createElement('hr');
    hr.className = 'border-gray-300 my-6';

    // Zona dinámica para agregar situaciones
    const situacionesContainer = document.createElement('div');
    situacionesContainer.id = `situacionesContainer-${planoIdCounter}`;
    situacionesContainer.className = 'situaciones-container space-y-6';

    const addSituacionBtn = document.createElement('button');
    addSituacionBtn.type = 'button';
    addSituacionBtn.className = 'btn bg-blue-500 hover:bg-blue-600 text-white';
    addSituacionBtn.textContent = 'Agregar otra descripción de situaciones';
    addSituacionBtn.addEventListener('click', () => addSituacion(situacionesContainer));

    // Ensamblar el contenido colapsable
    content.appendChild(descripcionDiv);
    content.appendChild(hr);
    content.appendChild(situacionesContainer);
    content.appendChild(addSituacionBtn);

    // Agregar funcionalidad de colapsar
    header.querySelector('.toggle-collapse').addEventListener('click', () => {
        const isCollapsed = content.classList.toggle('hidden');
        header.querySelector('.toggle-collapse').textContent = isCollapsed ? '+' : '-';
    });

    // Ensamblar la ventana completa
    planoContainer.appendChild(header);
    planoContainer.appendChild(content);
    planoContainer.appendChild(deleteButton);

    // Añadir la ventana al contenedor principal
    section1.appendChild(planoContainer);
}

// Lógica para agregar nuevas descripciones de situaciones
function addSituacion(container) {
    const situacionId = `${container.id}-situacion-${container.childElementCount + 1}`;

    const situacionGroup = document.createElement('div');
    situacionGroup.className = 'remove-problem-btn p-4 rounded border space-y-4 relative';

    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-2 right-2 bg-red-500 text-white p-1';
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        situacionGroup.remove();
    });

    const descriptionDiv = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Descripción de la Situación';
    descriptionLabel.className = 'block text-sm font-semibold mb-2';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.className = 'input w-full resize-y';
    descriptionTextarea.rows = 3;
    descriptionTextarea.placeholder = 'Descripción de la situación...';

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionTextarea);

    const addProblemButton = document.createElement('button');
    addProblemButton.type = 'button';
    addProblemButton.className = 'btn bg-green-500 hover:bg-green-600 text-white';
    addProblemButton.textContent = 'Agregar más problemas';

    const problemasContainer = document.createElement('div');
    problemasContainer.className = 'problemas-container space-y-4';

    const listaDiv = document.createElement('div');
    const listaLabel = document.createElement('label');
    listaLabel.textContent = 'Lista de Problemas de esta situación';
    listaLabel.className = 'block text-sm font-semibold mb-2';
    const listaSelect = document.createElement('select');
    listaSelect.className = 'input w-full problemas-lista';
    listaSelect.innerHTML = '<option disabled selected>Selecciona un problema</option>';

    listaDiv.appendChild(listaLabel);
    listaDiv.appendChild(listaSelect);

    function updateProblemasList() {
        listaSelect.innerHTML = '<option disabled selected>Selecciona un problema</option>';
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

    addProblemButton.addEventListener('click', () => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'flex items-center space-x-4';

        const textarea = document.createElement('textarea');
        textarea.className = 'problem-textarea input w-full';
        textarea.rows = 2;
        textarea.placeholder = 'Describe un problema...';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn bg-red-500 hover:bg-red-600 text-white';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            problemDiv.remove();
            updateProblemasList();
        });

        textarea.addEventListener('input', updateProblemasList);

        problemDiv.appendChild(textarea);
        problemDiv.appendChild(deleteBtn);
        problemasContainer.appendChild(problemDiv);
        updateProblemasList();
    });

    situacionGroup.appendChild(closeButton);
    situacionGroup.appendChild(descriptionDiv);
    situacionGroup.appendChild(addProblemButton);
    situacionGroup.appendChild(problemasContainer);
    situacionGroup.appendChild(listaDiv);

    container.appendChild(situacionGroup);
}
