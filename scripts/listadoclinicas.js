// Data de clinicas

const datosClinicas = [
  {
    nombre: 'CEAC',
    categoria: 'Clinica',
    direccion: 'Mitre 174 (O) - Capital',
    telefono: '2644274497',
    imagen: 'https://gmitresalud.com.ar/wp-content/uploads/2021/04/ceac-360x270.jpg',
  },
  {
    nombre: 'CIMAC',
    categoria: 'Clinica',
    direccion: 'Rivadavia 574 (E) - Capital',
    telefono: '2644293100',
    imagen: 'https://cimacsanjuan.com.ar/wp-content/uploads/2023/03/14.-fachada-cimac.jpg',
  },
  {
    nombre: 'CLÍNICA CASTAÑO',
    categoria: 'Clinica',
    direccion: 'Av. Libertador 952 (E) - Capital',
    telefono: '2644277879',
    imagen:
      'https://lh5.googleusercontent.com/p/AF1QipMxYeZWIqluFgvUFih1MrSCEpB7LIj4Jra0FKY0=w480-h300-k-n-rw',
  },
  {
    nombre: 'HOSPITAL ESPAÑOL',
    categoria: 'Hospital',
    direccion: 'Agustín Gómez 468 (O) - Capital',
    telefono: '2644221892',
    imagen:
      'https://media.tiempodesanjuan.com/p/be015863714c94b058949b4977be9cef/adjuntos/331/imagenes/000/177/0000177488/790x0/smart/498858jpg.jpg',
  },
  {
    nombre: 'HOSPITAL PRIVADO',
    categoria: 'Hospital',
    direccion: 'Rivadavia 542 (E) - Capital',
    telefono: '2644215871',
    imagen:
      'https://media.sanjuan8.com/p/f5173411eae19b33e04dd43a1cae4caa/adjuntos/303/imagenes/007/853/0007853656/hospital-privadojpg.jpg',
  },
  {
    nombre: 'SANATORIO ARGENTINO',
    categoria: 'Hospital',
    direccion: 'San Luis 432 (O) - Capital',
    telefono: '2644220450',
    imagen: 'https://www.sanatorioargentino.com.ar/uploads/cache/news_d_frente-2-0096.jpg',
  },
  {
    nombre: 'SANATORIO MAYO',
    categoria: 'Clinica',
    direccion: 'Mitre 192 (O) - Capital',
    telefono: '2644227272',
    imagen: 'https://gmitresalud.com.ar/wp-content/uploads/2021/04/SANATORIO-MAYO-360x270.jpg',
  },
];

// Función para renderizar los datos de las clínicas
function renderizarClinicas(clinicas) {
  const resultadosClinicas = document.getElementById('resultadosClinicas');
  resultadosClinicas.innerHTML = ''; // Limpiar resultados anteriores

  clinicas.forEach(clinica => {
    const divCol = document.createElement('div');
    divCol.classList.add('col-md-4');
    divCol.innerHTML = `
            <div class="box_list wow fadeIn">
                <figure>
                    <a >
                        <img id="imagen_clinica" src="${clinica.imagen}" class="img-fluid" alt="">
                    </a>
                </figure>
                <div class="wrapper">                    
                    <h3 id="nombre_clinica">${clinica.nombre}</h3>
                    <label style="color: #128bec;">Direccion:</label>
                    <p id="direccion_clinica">${clinica.direccion}</p>
                </div>
                <ul>
                    <li>
                        <a href="#0" id="telefono_clinica">${clinica.categoria}</a>
                    </li>
                    <li></li>
                    <li><a id="detalle_clinica" href="https://api.whatsapp.com/send?phone=549${clinica.telefono}"><i class="icon-phone-circled"></i> ${clinica.telefono}</i></a></li>
                </ul>
            </div>
        `;
    resultadosClinicas.appendChild(divCol);
  });
}

// Función para filtrar clínicas por categoría
function filtrarClinicasPorCategoria(categoria) {
  // Deseleccionar todos los radio buttons antes de seleccionar uno nuevo
  deseleccionarRadios();

  let clinicasFiltradas = datosClinicas;

  if (categoria !== 'todos') {
    clinicasFiltradas = datosClinicas.filter(clinica => clinica.categoria === categoria);
  }

  renderizarClinicas(clinicasFiltradas);

  // Marcar el radio button correspondiente como seleccionado
  if (categoria === 'Clinica') {
    document.getElementById('categoria_clinicas').checked = true;
  } else if (categoria === 'Hospital') {
    document.getElementById('categoria_hospitales').checked = true;
  }
}

// Función para filtrar clínicas por nombre al hacer clic en el botón "Buscar"
function filtrarClinicasPorNombre() {
  const textoBusqueda = document.getElementById('buscarClinica').value.toLowerCase();
  const clinicasFiltradas = datosClinicas.filter(clinica =>
    clinica.nombre.toLowerCase().includes(textoBusqueda)
  );
  renderizarClinicas(clinicasFiltradas);
}

// Renderizar todas las clínicas al cargar la página
window.addEventListener('load', function () {
  renderizarClinicas(datosClinicas);
});

// Deseleccionar los radio buttons
function deseleccionarRadios() {
  document.getElementById('categoria_hospitales').checked = false;
  document.getElementById('categoria_clinicas').checked = false;
}

// Agregar evento de escucha al botón de búsqueda
document.getElementById('botonBuscarClinica').addEventListener('click', filtrarClinicasPorNombre);
