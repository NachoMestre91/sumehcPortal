document.addEventListener('DOMContentLoaded', async function () {

  let medicos = [];

  try {
    const res = await fetch('data/medicos.json');

    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
    }

    medicos = await res.json();

  } catch (error) {
    console.error('Error cargando JSON:', error);
    return;
  }

  // ESPECIALIDADES
  const especialidades = [
    { value: 'todos', label: 'Todas las Especialidades' },
    { value: 'CIRUGIA CARDIOVASCULAR', label: 'CIRUGIA CARDIOVASCULAR' },
    { value: 'CUIDADOS PALIATIVOS', label: 'CUIDADOS PALIATIVOS' },
    { value: 'CARDIOLOGIA', label: 'CARDIOLOGIA' },
    { value: 'CIRUGIA GENERAL', label: 'CIRUGIA GENERAL' },
    { value: 'FISIOKINESIO', label: 'FISIOKINESIO' },
    { value: 'GINECOLOGIA', label: 'GINECOLOGIA' },
    { value: 'INFECTOLOGIA', label: 'INFECTOLOGIA' },
    { value: 'NEFROLOGIA', label: 'NEFROLOGIA' },
    { value: 'NUTRICIONISTA', label: 'NUTRICIONISTA' },
    { value: 'ONCOLOGIA', label: 'ONCOLOGIA' },
    { value: 'PEDIATRIA', label: 'PEDIATRIA' },
    { value: 'PSICOLOGIA', label: 'PSICOLOGIA' },
  ];

  const selectEspecialidad = document.getElementById('buscarespecialidad');

  especialidades.forEach(e => {
    const option = document.createElement('option');
    option.value = e.value;
    option.textContent = e.label;
    if (e.value === 'todos') option.selected = true;
    selectEspecialidad.appendChild(option);
  });

  // Busquedas
  const inputMedico = document.getElementById('buscarmedico');
  const inputTextoExtra = document.getElementById('buscarclinica');
  const lista = document.getElementById('listaResultados');

  // Renderizado tarjeta medico
  function renderizar(data) {

    lista.innerHTML = '';

    data.forEach(medico => {

      lista.innerHTML += `
        <div class="strip_list wow fadeIn">

          <figure>
            <a href="detail-medico.html?id=${medico.id}">
              <img src="${medico.imagen}" />
            </a>
          </figure>

          <small>${medico.especialidad}</small>
          <h3>${medico.medicoprofesional}</h3>
          <p>${medico.descripcion}</p>

          <ul>
            <li>${medico.nombreclinica}</li>
            <li>${medico.nombrehospital}</li>
            <li>
              <a href="detail-medico.html?id=${medico.id}">
                Ver detalles
              </a>
            </li>
          </ul>

        </div>
      `;
    });
  }

  // Filtros

  function filtrar() {

    const textoMedico = inputMedico.value.toLowerCase().trim();
    const textoExtra = inputTextoExtra.value.toLowerCase().trim();
    const esp = selectEspecialidad.value.toLowerCase();

    const filtrados = medicos.filter(m => {

      const nombre = (m.medicoprofesional || '').toLowerCase();
      const clinica = (m.nombreclinica || '').toLowerCase();
      const especialidad = (m.especialidad || '').toLowerCase();

      return (
        (textoMedico === '' || nombre.includes(textoMedico)) &&
        (textoExtra === '' || nombre.includes(textoExtra)) &&  
        (esp === 'todos' || especialidad === esp)
      );
    });

    renderizar(filtrados);
  }

  // Filtros adicionales
  inputMedico.addEventListener('input', filtrar);
  inputTextoExtra.addEventListener('input', filtrar);
  selectEspecialidad.addEventListener('change', filtrar);

  // REnderizado inicial
  renderizar(medicos);

});