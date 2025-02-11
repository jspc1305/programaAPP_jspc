document.addEventListener('DOMContentLoaded', () => {
    const rowsContainer = document.getElementById('rowsContainer');
    const addRowBtn = document.getElementById('addRowBtn');
    const updateBtn = document.getElementById('updateBtn');

    // Opciones condicionales
    const optionsData = {
        Fase1: {
            Campo1: { Contenido1: ["PDA1", "PDA2"], Contenido2: ["PDA3"] },
            Campo2: { Contenido1: ["PDA4"], Contenido2: ["PDA5"] },
        },
        Fase2: {
            Campo1: { Contenido1: ["PDA6"], Contenido2: ["PDA7"] },
            Campo2: { Contenido1: ["PDA8"], Contenido2: ["PDA9"] },
        },
        Fase3: {
            Campo1: { Contenido1: ["PDA10"], Contenido2: ["PDA11"] },
            Campo2: { Contenido1: ["PDA12"], Contenido2: ["PDA13"] },
        }
    };


    // Obtener problemas redactados de la sección 1
    function getProblemasRedactados() {
        const problemas = [];
        document.querySelectorAll('.problem-textarea').forEach(textarea => {
            const texto = textarea.value.trim();
            if (texto !== '') {
                problemas.push(texto);
            }
        });
        return problemas;
    }

    // Función para agregar un nuevo renglón
    function addRow() {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-10 gap-4 items-center relative';

        // Crear las columnas
        const problemasSelect = createSelect(getProblemasRedactados()); // Selector dinámico de problemas
        const faseSelect = createSelect(['Fase1', 'Fase2', 'Fase3']);
        const camposSelect = createSelect([]);
        const contenidosSelect = createSelect([]);
        const pdaSelect = createSelect([]);
        const ejeArticuladorSelect = createSelect(["Eje1", "Eje2", "Eje3"]);
        const objetoButton = createButton();
        const nivelButton = createButton();
        const evidenciaButton = createButton();
        const removeButton = createRemoveButton(row);

        // Mostrar ventana emergente para redacción
        objetoButton.addEventListener('click', () => showPopup('objeto', objetoButton));
        nivelButton.addEventListener('click', () => showPopup('nivel', nivelButton));
        evidenciaButton.addEventListener('click', () => showPopup('evidencia', evidenciaButton));

        // Actualizar opciones condicionales
        faseSelect.addEventListener('change', () => {
            updateSelect(camposSelect, Object.keys(optionsData[faseSelect.value] || {}));
            updateSelect(contenidosSelect, []);
            updateSelect(pdaSelect, []);
        });

        camposSelect.addEventListener('change', () => {
            const contenidos = optionsData[faseSelect.value]?.[camposSelect.value] || {};
            updateSelect(contenidosSelect, Object.keys(contenidos));
            updateSelect(pdaSelect, []);
        });

        contenidosSelect.addEventListener('change', () => {
            const pdaOptions = optionsData[faseSelect.value]?.[camposSelect.value]?.[contenidosSelect.value] || [];
            updateSelect(pdaSelect, pdaOptions);
        });

        // Agregar elementos al renglón
        row.appendChild(problemasSelect);
        row.appendChild(faseSelect);
        row.appendChild(camposSelect);
        row.appendChild(contenidosSelect);
        row.appendChild(pdaSelect);
        row.appendChild(ejeArticuladorSelect);
        row.appendChild(objetoButton);
        row.appendChild(nivelButton);
        row.appendChild(evidenciaButton);
        row.appendChild(removeButton);

        rowsContainer.appendChild(row);
    }

    // Crear un área de texto
    function createTextarea(rows) {
        const textarea = document.createElement('textarea');
        textarea.className = 'input w-full resize-y';
        textarea.rows = rows;
        textarea.style.resize = 'vertical';
        return textarea;
    }

    // Crear un botón
    function createButton() {
        const button = document.createElement('button');
        button.className = 'btn bg-blue-500 hover:bg-blue-600 text-white text-xs';
        button.textContent = 'Editar';
        return button;
    }

    // Crear un botón para eliminar renglón
    function createRemoveButton(row) {
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'btn bg-red-500 hover:bg-red-600 text-white text-xs';
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => row.remove());
        return removeButton;
    }

    // Crear un selector
    function createSelect(options) {
        const select = document.createElement('select');
        select.className = 'input w-full';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Selecciona una opción';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select.appendChild(defaultOption);
        updateSelect(select, options);
        return select;
    }

    // Actualizar las opciones de un selector
    function updateSelect(select, options) {
        select.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            select.appendChild(opt);
        });
    }

    // Variable global para almacenar el texto de cada botón
let savedText = {
    objeto: '',
    nivel: '',
    evidencia: ''
};

// Mostrar ventana emergente para redacción de texto
function showPopup(type, button) {
    const popup = document.createElement('div');
    popup.className = 'fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50';
    const content = document.createElement('div');
    content.className = 'bg-white p-6 rounded-lg w-96';

    const textarea = createTextarea(5);
    
    // Cargar el texto previamente guardado en el textarea
    textarea.value = savedText[type] || '';

    const saveButton = document.createElement('button');
    saveButton.className = 'btn bg-green-500 hover:bg-green-600 text-white mt-4';
    saveButton.textContent = 'Guardar';

    saveButton.addEventListener('click', () => {
        // Guardar el texto redactado para futura edición
        savedText[type] = textarea.value;

        // Actualizar el texto del botón con el texto redactado
        button.textContent = textarea.value || 'Editar';

        // Cerrar el popup
        document.body.removeChild(popup);
    });

    content.appendChild(textarea);
    content.appendChild(saveButton);
    popup.appendChild(content);
    document.body.appendChild(popup);
}

// Función para crear un área de texto
function createTextarea(rows) {
    const textarea = document.createElement('textarea');
    textarea.rows = rows;
    textarea.className = 'w-full p-2 border rounded';
    return textarea;
}


    // Función para actualizar la lista de problemas redactados
    function updateProblemas() {
        const problemaSelects = document.querySelectorAll('#rowsContainer select');
        const problemasRedactados = getProblemasRedactados();
        
        problemaSelects.forEach(select => {
            if (select && select.tagName.toLowerCase() === 'select' && select.options[0]?.textContent === "Selecciona una opción") {
                updateSelect(select, problemasRedactados);
            }
        });
    }

    // Agregar un primer renglón al cargar la página
    addRowBtn.addEventListener('click', addRow);

    // Agregar la funcionalidad del botón de actualizar
    updateBtn.addEventListener('click', updateProblemas);
});
