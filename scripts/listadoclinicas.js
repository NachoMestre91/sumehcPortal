let datosClinicas = [];

document.addEventListener('DOMContentLoaded', async function () {

  const contenedor = document.getElementById('resultadosClinicas');

  // Cargado de Clinicas desde el Json
  try {
    const res = await fetch('./data/clinicas.json');

    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
    }

    datosClinicas = await res.json();

  } catch (error) {
    console.error('Error cargando datos:', error);
    contenedor.innerHTML = "<h4>Error cargando datos</h4>";
    return;
  }

  // Renderizado ficha medico

  function renderizar(lista) {
    contenedor.innerHTML = '';

    lista.forEach(c => {

      const telefono = c.telefono;
      const whatsapp = `https://wa.me/549${telefono.replace(/\D/g, '')}`;

      contenedor.innerHTML += `
        <div class="col-md-4">
          <div class="box_list wow fadeIn">

            <figure>
              <img src="${c.imagen}" class="img-fluid" alt="${c.nombre}">
            </figure>

            <div class="wrapper">
              <h3>${c.nombre}</h3>
              <label style="color:#128bec;">Dirección:</label>
              <p>${c.direccion}</p>
            </div>

            <ul>
              <li>
                <span>${c.categoria}</span>
              </li>

              <!-- WHATSAPP -->
              <li>
                <a href="${whatsapp}" target="_blank"
                   style="background:#25D366;color:#fff;padding:6px 10px;border-radius:5px;display:inline-flex;align-items:center;gap:6px;">
                  <i class="icon-chat"></i>
                  WhatsApp
                </a>
              </li>

              <!-- TELÉFONO -->
              <li>
                <a href="tel:+549${telefono}"
                   style="display:flex;align-items:center;gap:6px;">
                  <i class="icon-phone-circled"></i>
                  ${telefono}
                </a>
              </li>

            </ul>

          </div>
        </div>
      `;
    });
  }

  // Busqueda 
  document.getElementById('botonBuscarClinica')
    .addEventListener('click', function () {

      const texto = document.getElementById('buscarClinica').value.toLowerCase();

      const filtradas = datosClinicas.filter(c =>
        c.nombre.toLowerCase().includes(texto)
      );

      renderizar(filtradas);
    });

  // Selector filtro categoria
  window.filtrarClinicasPorCategoria = function (categoria) {

    let filtradas = datosClinicas;

    if (categoria !== 'todos') {
      filtradas = datosClinicas.filter(c => c.categoria === categoria);
    }

    renderizar(filtradas);
  };

  // Renderizado Inicial
  renderizar(datosClinicas);

});