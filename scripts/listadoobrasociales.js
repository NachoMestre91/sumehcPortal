// Importa los datos de obrasSociales desde el archivo obrasociales.js
import obrasSociales from '../data/obrasociales';

// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  console.log('listado:', obrasSociales);

  // Resto del código para manipular los datos de obrasSociales y renderizar la tabla
  function renderTable(filteredData) {
    var table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = `
      <thead style="background-color: #128bec; color: #fff">
        <tr>
          <th>Obra Social</th>
          <th>Denominacion</th>
          <th>Direccion</th>
          <th>Email</th> 
        </tr>
      </thead>
      <tbody>
        ${filteredData
          .map(
            row => `
          <tr>
            <td>${row.sigla}</td>
            <td>${row.denominacion}</td>
            <td>${row.domicilio}</td>
            <td>${row.telefono}</td>              
          </tr>
        `
          )
          .join('')}
      </tbody>
    `;

    var listadoObrasSocialesDiv = document.getElementById('listadoObrasSociales');
    listadoObrasSocialesDiv.innerHTML = ''; // Clear previous content
    listadoObrasSocialesDiv.appendChild(table);
  }

  function buscarObraSocial() {
    var input, filter, filteredData;
    input = document.getElementById('buscarObraSocial');
    filter = input.value.toUpperCase();

    // Filter the data based on the search query
    filteredData = obrasSociales.filter(row => {
      return (
        row.sigla.toUpperCase().includes(filter) || row.denominacion.toUpperCase().includes(filter)
      );
    });

    // Render the table with the filtered data
    renderTable(filteredData);
  }

  // Asignar evento click al botón "Buscar"
  document.getElementById('botonBuscarObraSocial').addEventListener('click', buscarObraSocial);

  // Initial render of the table with all data
  renderTable(obrasSociales);
});
