// Buscar Listado de medicos y filtros

document.addEventListener('DOMContentLoaded', function () {
  // Datos de especialidades
  const especialidades = [
    {value: 'todos', label: 'Todas las Especialidades'},
    {value: 'CIRUGIA CARDIOVASCULAR', label: 'CIRUGIA CARDIOVASCULAR'},
    {value: 'CUIDADOS PALIATIVOS', label: 'CUIDADOS PALIATIVOS'},
    {value: 'CARDIOLOGIA', label: 'CARDIOLOGIA'},
    {value: 'CIRUGIA GENERAL', label: 'CIRUGIA GENERAL'},
    {value: 'FISIOKINESIO', label: 'FISIOKINESIO'},
    {value: 'GINECOLOGIA', label: 'GINECOLOGIA'},
    {value: 'INFECTOLOGIA', label: 'INFECTOLOGIA'},
    {value: 'NEFROLOGIA', label: 'NEFROLOGIA'},
    {value: 'NUTRICIONISTA', label: 'NUTRICIONISTA'},
    {value: 'ONCOLOGIA', label: 'ONCOLOGIA'},
    {value: 'PEDIATRIA', label: 'PEDIATRIA'},
    {value: 'PSICOLOGIA', label: 'PSICOLOGIA'},
  ];

  const selectEspecialidad = document.getElementById('buscarespecialidad');

  // Agregar las opciones al menú desplegable
  especialidades.forEach(function (especialidad) {
    const option = document.createElement('option');
    option.value = especialidad.value;
    option.textContent = especialidad.label;
    if (especialidad.value === 'todos') {
      option.selected = true; // Establecer como seleccionado
    }
    // Agregar estilo al texto de la etiqueta de opción
    if (especialidad.label === 'Todas las Especialidades') {
      option.style.color = '#128bec'; // Ejemplo de estilo: color azul
    }
    selectEspecialidad.appendChild(option);
  });
  // Datos de Medicos

  const medicos = [
    {
      especialidad: 'CIRUGIA GENERAL',
      medicoprofesional: 'Dr. Mario Begueri',
      descripcion: 'Especialista en Neurocirugia',
      nombreclinica: 'Sanatorio San Juan',
      nombrehospital: 'Hospital Rawson',
      detalleMedico: 'detalle-medico-1.html',
      matricula: '2014',
      imagen: 'img/doctores/mario-begueri.jpg',
      datosProfesional:'El Dr. Mario Begueri es un destacado neurocirujano con más de 20 años de experiencia en el tratamiento quirúrgico de trastornos del cerebro, columna vertebral y sistema nervioso periférico. Se ha especializado en procedimientos de alta complejidad, como cirugías de tumores cerebrales, malformaciones vasculares y cirugía de columna mínimamente invasiva.',

    },
    {
      especialidad: 'CARDIOLOGIA',
      medicoprofesional: 'Dr. Alvo Marcos',
      descripcion: 'Especialista en cardiologia.',
      nombreclinica: 'Instituto de Traumatologia',
      nombrehospital: 'Hospital Rawson',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '1587',
      imagen: 'img/doctores/alvo-marcos.jpg',
      datosProfesional:'El Dr. Alvo Marcos es un reconocido cardiólogo con más de 14 años de experiencia en el diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio. Especializado en la prevención, tratamiento y manejo de condiciones como la hipertensión, insuficiencia cardíaca, arritmias y enfermedades coronarias, ha brindado atención de alta calidad a pacientes con problemas cardíacos complejos.',
    },
    {
      especialidad: 'INFECTOLOGIA',
      medicoprofesional: 'Dra. Salanitro Beatriz',
      descripcion: 'Especialista en enfermedades de la piel.',
      nombreclinica: 'Cimac',
      nombrehospital: 'Hospital Marcial Quiroga',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '21779',
      imagen: 'img/doctores/salanitro-beatriz.jpg',
      datosProfesional:'La Dra. Salanitro Beatriz es una experta en dermatología e infectología, con amplia experiencia en el diagnóstico y tratamiento de enfermedades de la piel, especialmente aquellas causadas por infecciones bacterianas, virales, micóticas y parasitarias. Su enfoque abarca tanto el cuidado dermatológico como la prevención y manejo de infecciones cutáneas complejas, brindando soluciones eficaces a problemas como dermatitis, acné, infecciones de transmisión sexual, y otras afecciones cutáneas relacionadas con infecciones sistémicas.',
    },
    {
      especialidad: 'GINECOLOGIA',
      medicoprofesional: 'Dra. Victoria Ocampo',
      descripcion: 'Especialista en enfermedades ginecologicas',
      nombreclinica: 'Sanatorio Argentino',
      nombrehospital: 'Hospital Rawson',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '2834',
      imagen: 'img/doctores/ocampo-victoria.jpg',
      datosProfesional:'La Dra. Victoria Ocampo es una ginecóloga altamente calificada con especialización en el diagnóstico y tratamiento de enfermedades ginecológicas, incluyendo trastornos hormonales, infecciones del tracto reproductivo, endometriosis, miomas, quistes ováricos y otras afecciones que afectan la salud femenina. Con más de 11 años de experiencia, la Dra. Ocampo se dedica a proporcionar cuidados integrales y personalizados a mujeres en todas las etapas de la vida.',
    },
    {
      especialidad: 'PSICOLOGIA',
      medicoprofesional: 'Dra. Garcia Florencia',
      descripcion: 'Especialista en psicoanalisis',
      nombreclinica: 'CIMAC',
      nombrehospital: 'Hospital Español',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '1457',
      imagen: 'img/doctores/florencia-garcia.jpg',
      datosProfesional:'La Dra. Garcia Florencia es una psicóloga con especialización en psicoanálisis y más de 22 años de experiencia en el tratamiento de trastornos emocionales y psicológicos profundos. Su enfoque terapéutico se basa en el psicoanálisis, una disciplina que permite explorar el inconsciente, ayudando a los pacientes a comprender el origen de sus conflictos internos, ansiedades y comportamientos.',
    },
    {
      especialidad: 'ONCOLOGIA',
      medicoprofesional: 'Dr. Jose LLudgar',
      descripcion: 'Especialista en enfermedades terminales',
      nombreclinica: 'COE',
      nombrehospital: 'Hospital Español',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '364',
      imagen: 'img/doctores/jose-lludgar.jpg',
      datosProfesional:'El Dr. Jose LLudgar es un oncólogo con una destacada trayectoria en el manejo integral de pacientes con cáncer avanzado y enfermedades terminales. Con más de 17 años de experiencia, su enfoque se centra en brindar tratamientos personalizados que mejoran la calidad de vida, controlando los síntomas y el dolor asociados con etapas avanzadas de la enfermedad. Especialista en cuidados paliativos, el Dr. Lludgar acompaña a sus pacientes y familias durante momentos críticos, ofreciendo apoyo médico y emocional.',
    },
    {
      especialidad: 'CUIDADOS PALIATIVOS',
      medicoprofesional: 'Dr. Daniel Putelli',
      descripcion: 'Especialista en cuidados del dolor',
      nombreclinica: 'Clinica San Marcos',
      nombrehospital: 'Hospital Marcial Quiroga',
      detalleMedico: 'detalle-medico-2.html',
      matricula: '1258',
      imagen: 'img/doctores/daniel-putelli.jpg',
      datosProfesional:'El Dr. Daniel Putelli es un médico especializado en cuidados paliativos, con una vasta experiencia en el acompañamiento de pacientes con enfermedades crónicas o terminales. Su enfoque está orientado a mejorar la calidad de vida de las personas en situaciones avanzadas de enfermedad, proporcionando alivio del dolor y control de síntomas, además de ofrecer apoyo emocional y psicológico tanto a los pacientes como a sus familias.',
    },
    // Agrega más objetos para representar más médicos si es necesario
  ];

  const inputBuscarMedico = document.getElementById('buscarmedico');
  const inputBuscarClinica = document.getElementById('buscarclinica');
  const selectBuscarEspecialidad = document.getElementById('buscarespecialidad');
  const listaResultados = document.getElementById('listaResultados');

  function filtrarResultados() {
    const criterioBusquedaMedico = inputBuscarMedico.value.trim().toLowerCase();
    const criterioBusquedaClinica = inputBuscarClinica.value.trim().toLowerCase();
    const criterioBusquedaEspecialidad = selectBuscarEspecialidad.value.trim().toLowerCase();

    listaResultados.innerHTML = ''; // Limpiar resultados anteriores

    medicos.forEach(function (medico) {
      const especialidad = medico.especialidad.toLowerCase();
      const nombre = medico.medicoprofesional.toLowerCase();
      const hospital = medico.nombreclinica.toLowerCase();

      // Comprueba si alguno de los criterios de búsqueda coincide con el médico actual
      if (
        (criterioBusquedaMedico === '' || nombre.includes(criterioBusquedaMedico)) &&
        (criterioBusquedaClinica === '' || hospital.includes(criterioBusquedaClinica)) &&
        (criterioBusquedaEspecialidad === 'todos' || especialidad === criterioBusquedaEspecialidad)
      ) {
        mostrarResultado(medico);
      }
    });
  }

  function mostrarResultado(medico) {
    const resultadoHTML = `
      <div class="strip_list wow fadeIn">
        <figure>
          <a href="${medico.detalleMedico}">
            <img src="${medico.imagen}" alt="" />
          </a>
        </figure>
        <small>${medico.especialidad}</small>
        <h3>${medico.medicoprofesional}</h3>
        <p>${medico.descripcion}</p>
        <ul>
          <li>
            <a href="#0" onclick="onHtmlClick('Doctors', 0)" class="btn_listing">${medico.nombreclinica}</a>
          </li>
          <li>
            <a href="${medico.nombrehospital}" target="_blank">${medico.nombrehospital}</a>
          </li>
          <li>
            <a href="detail-medico.html?especialidad=${medico.especialidad}&medicoprofesional=${medico.medicoprofesional}&nombrehospital=${medico.nombrehospital}&nombreclinica=${medico.nombreclinica}&matricula=${medico.matricula}&imagen=${medico.imagen}&datosProfesional=${medico.datosProfesional}" class="ver-detalles">Ver detalles</a>
          </li>
        </ul>
      </div>
    `;
    listaResultados.insertAdjacentHTML('beforeend', resultadoHTML);
  }

  // Agregar un evento de cambio a los campos de búsqueda para activar el filtrado
  inputBuscarMedico.addEventListener('input', filtrarResultados);
  inputBuscarClinica.addEventListener('input', filtrarResultados);
  selectBuscarEspecialidad.addEventListener('change', filtrarResultados);

  // Mostrar todos los resultados inicialmente
  medicos.forEach(function (medico) {
    mostrarResultado(medico);
  });
});

// Habilitar Filtrado de busqueda por clinica

document.addEventListener('DOMContentLoaded', function () {
  // Hide both filter options initially
  document.getElementById('filtroespecialidad').style.display = 'none';
  document.getElementById('filtroclinicas').style.display = 'none';

  // Function to show the selected filter option
  function toggleFilterOption(optionId) {
    // Hide both filter options first
    document.getElementById('filtroespecialidad').style.display = 'none';
    document.getElementById('filtroclinicas').style.display = 'none';

    // Show the selected filter option
    document.getElementById(optionId).style.display = 'block';
  }

  // Add event listener to "Médicos" radio button
  document.getElementById('doctores').addEventListener('change', function () {
    toggleFilterOption('filtroespecialidad');
  });

  // Add event listener to "Clínicas" radio button
  document.getElementById('clinicas').addEventListener('change', function () {
    toggleFilterOption('filtroclinicas');
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   const radioDoctores = document.getElementById('doctores');
//   const radioClinicas = document.getElementById('clinicas');
//   const filtroClinicas = document.getElementById('filtroclinicas');

//   // Función para mostrar u ocultar el filtro de clínicas según la selección
//   function toggleFiltroClinicas() {
//     filtroClinicas.style.display = radioClinicas.checked ? 'block' : 'none';
//   }

//   // Llamar a la función cuando se carga la página y cuando cambia la selección del radio
//   toggleFiltroClinicas();
//   radioDoctores.addEventListener('change', toggleFiltroClinicas);
//   radioClinicas.addEventListener('change', toggleFiltroClinicas);
// });
