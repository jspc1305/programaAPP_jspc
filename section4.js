function abrirNuevaPestana() {
    // Crear una nueva ventana
    const descripcionTema1 = document.getElementById("descripcionTema-1").value;
    const nivelEducativo = document.getElementById("nivelEducativo").value;
    const centroTrabajo = document.getElementById("centroTrabajo").value;
    const zonaEscolar = document.getElementById("zonaEscolar").value;
    const sectorEducativo = document.getElementById("sectorEducativo").value;
    const fase = document.getElementById("fase").value;
    const grado = document.getElementById("grado").value;
    const grupo = document.getElementById("grupo").value;
    const nombreDocente = document.getElementById("nombreDocente").value;
    const nombreDirector = document.getElementById("nombreDirector").value;
    const inicioPeriodo = document.getElementById("inicioPeriodo").value;
    const finPeriodo = document.getElementById("finPeriodo").value;
    //const descripcionTema = document.getElementById("descripcionTema").value;
    //const descriptionTextarea = document.getElementById("descriptionTextarea").value;

    var nuevaVentana = window.open();

    // Escribir el contenido HTML dentro de la nueva ventana
    nuevaVentana.document.open();
    nuevaVentana.document.write(`
        <!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planificación Didáctica</title>
  <link rel="stylesheet" href="styleFormatB.css">
</head>

<body class="bg-gray-100 font-sans">
  <div class="container mx-auto px-2 py-6" id="content">
    <!-- Encabezado -->
    <div class="flex justify-bet ween items-center py-4 border-b">
      <img src="assets/Ddapptic.svg" alt="Logo" class="h-12">
      <div id="current-date-time" class="text-sm text-right">
        <p class="text-slate-400">Fecha</p>
        <p class="font-bold text-gray-700">15 de noviembre, 2024</p>
      </div>
    </div>

    <!-- Datos Generales -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Datos Generales</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td class="py-2 bold-column">Nivel Educativo:</td>
      <td class="py-2 ">${nivelEducativo}</td>
      <td class="py-2 bold-column">Nombre del Centro de Trabajo:</td>
      <td class="py-2">${centroTrabajo}</td>
      <td class="py-2 bold-column">Zona Escolar:</td>
      <td class="py-2">${zonaEscolar}</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td class="py-2 bold-column">Sector Educativo:</td>
      <td class="py-2">${sectorEducativo}</td>
      <td class="py-2 bold-column">Fase:</td>
      <td class="py-2">${fase}</td>
      <td class="py-2 bold-column">Grado:</td>
      <td class="py-2">${grado}</td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td class="py-2 bold-column">Grupo:</td>
      <td class="py-2">${grupo}</td>
      <td class="py-2 bold-column">Nombre del Docente:</td>
      <td class="py-2">${nombreDocente}</td>
      <td class="py-2 bold-column">Nombre del Director:</td>
      <td class="py-2">${nombreDirector}</td>
    </tr>

    <!-- Fila 4: Periodo de realización -->
    <tr>
      <td colspan="6" class="py-4 text-center bold-column">
        Periodo de realización
      </td>
    </tr>

    <!-- Fila 5 -->
    <tr>
      <td class="py-2 bold-column">Inicio:</td>
      <td class="py-2">${inicioPeriodo}</td>
      <td class="py-2 border border-gray-300"></td>
      <td class="py-2 font-bold border border-gray-300"></td>
      <td class="py-2 bold-column">Fin:</td>
      <td class="py-2">${finPeriodo}</td>
    </tr>
  </tbody>
</table>

    </div>
    <!-- Ubicación Curricular -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Ubicación Curricular</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Problema</td>
      <td class="py-2 bold-column">PDA (s)</td>
      <td class="py-2 bold-column">Contenido (s)</td>
      <td class="py-2 bold-column">Campo (s) Formativo (s)</td>
      <td class="py-2 bold-column">Eje (s) Articulador (es)</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td colspan="2" class="py-2">${descripcionTema1}</td>
      <td class="py-2">${descripcionTema1}</td>
      <td class="py-2">Agregar</td>
      <td class="py-2">Agregar</td>
      <td class="py-2">Agregar</td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td colspan="6" class="py-2 bold-column">Objetos de Enseñanza</td>
    </tr>

    <!-- Fila 4: Periodo de realización -->
    <tr>
      <td colspan="6" class="py-2">Agregar</td>
    </tr>
  </tbody>
</table>

    </div>
    <!-- Evaluación -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Evaluación</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Proceso de pensamiento</td>
      <td colspan="4" class="py-2">Agregar proceso de pensamiento</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Evidencia de aprendizaje</td>
      <td colspan="4" class="py-2">Agregar Evidencia de aprendizaje</td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td colspan="6" class="py-2 text-center bold-column">Nivel de logro</td>
    </tr>

    <!-- Fila 4: -->
    <tr>
      <td class="py-2 bold-column">Recordar</td>
      <td class="py-2 bold-column">Comprender</td>
      <td class="py-2 bold-column">Analizar</td>
      <td class="py-2 bold-column">Aplicar</td>
      <td class="py-2 bold-column">Valorar</td>
      <td class="py-2 bold-column">Crear</td>
    </tr>

    <!-- Fila 5: -->
    <tr>
      <td class="py-2">Uso y dominio de la memoria a largo plazo</td>
      <td class="py-2">Comprensión de las ideas y de los conceptos</td>
      <td class="py-2">Capacidad de fragmentar la información, descomponerla y relacionarla.</td>
      <td class="py-2">Capacidad de fragmentar la información, descomponerla y relacionarla.
Poner en práctica los procedimientos aprendidos para resolver problemas en contextos nuevos.</td>
      <td class="py-2">Emitir juicios de valor,  justificar y defender opiniones</td>
      <td class="py-2">Utilizar lo aprendido y las habilidades adquiridas para construir ideas nuevas.</td>
    </tr>
  </tbody>
</table>

    </div>
    <!-- Secuencia Didáctica -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Secuencia Didáctica</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Nombre del proyecto</td>
      <td colspan="4" class="py-2">Agregar Nombre del proyecto</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Metodología/Estrategia</td>
      <td colspan="4" class="py-2">Agregar Metodología/Estrategia</td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td colspan="2" class="py-2 bold-column">Escenario</td>
      <td colspan="4" class="py-2">Agregar Escenario</td>
    </tr>

    <!-- Fila 4: -->
    <tr>
      <td class="py-2 bold-column">Fase</td>
      <td class="py-2 bold-column">Etapa</td>
      <td colspan="2" class="py-2 bold-column">Actividades</td>
      <td colspan="2" class="py-2 bold-column">Proceso de evaluación formativa</td>
    </tr>

    <!-- Fila 5: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td colspan="2" class="py-2"></td>
      <td colspan="2" class="py-2"></td>
    </tr>
    <!-- Fila 6: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td colspan="2" class="py-2"></td>
      <td colspan="2" class="py-2"></td>
    </tr>
    <!-- Fila 7: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td colspan="2" class="py-2"></td>
      <td colspan="2" class="py-2"></td>
    </tr>
  </tbody>
</table>

    </div>

    
    <!-- Organización -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Organización</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td class="py-2 bold-column">Fase</td>
      <td class="py-2 bold-column">Etapa</td>
      <td class="py-2 bold-column">Tiempo</td>
      <td class="py-2 bold-column">Espacio</td>
      <td class="py-2 bold-column">Medios didácticos (Recursos y materiales)</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 4: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 5: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
    <!-- Fila 6: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
    <!-- Fila 7: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
  </tbody>
</table>

    </div>

    <!-- REGISTRO DE ACTIVIDADES REALIZADAS  -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Registro de Actividades Realizadas</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td class="py-2 bold-column">Actividades</td>
      <td class="py-2 bold-column">Fecha</td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 3 -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 4: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>

    <!-- Fila 5: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
    <!-- Fila 6: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
    <!-- Fila 7: -->
    <tr>
      <td class="py-2"></td>
      <td class="py-2"></td>
    </tr>
  </tbody>
</table>

    </div>

    <!-- Reflexiones sobre la situación didáctica realizada           -->
    <div class="bg-white mt-6 shadow-lg rounded-lg p-6">
      <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Reflexiones sobre la situación didáctica realizada</h2>
     <table class="w-full text-sm border border-gray-300">
  <tbody>
    <!-- Fila 1 -->
    <tr>
      <td colspan="6" class="py-2">a. Congruencia entre las actividades definidas a partir de la metodología y los niveles de logro planteados.b. Evidencia de los niveles de logro alcanzados.          </td>
    </tr>

    <!-- Fila 2 -->
    <tr>
      <td colspan="3" class="py-2 text-center">_______________________</td>
      <td colspan="3" class="py-2 text-center">_______________________</td>
    </tr>
    <!-- Fila 3 -->
    <tr>
      <td colspan="3" class="py-2 text-center bold-column">Nombre del docente</td>
      <td colspan="3" class="py-2 text-center bold-column">Vo. Bo. del director</td>
    </tr>

  </tbody>
</table>
    </div>

    <!-- Footer -->
    <footer class="mt-10 text-center text-xs text-neutral-600">
      <p>Escuela Modelo | contacto@escuelamodelo.edu.mx | +52-123-456-7890</p>
    </footer>
  </div>
  
</body>

</html>
    `);
    nuevaVentana.document.close();
}