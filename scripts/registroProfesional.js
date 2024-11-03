document.addEventListener('DOMContentLoaded', function () {
  // Obtencion valores input
  const nombreMedico = document.getElementById('nombre_prestador');
  const apellidoMedico = document.getElementById('apellido_prestador');
  const especialidadMedico = document.getElementById('especialidad_prestador');
  const matriculaMedico = document.getElementById('matricula_prestador');
  const hospitalMedico = document.getElementById('hospital_prestador');
  const clinicaMedico = document.getElementById('clinica_prestador');

  // Obtencion de Credencial del prestador

  const nombreApellidoProfesional = document.getElementById('nombre_apellido_medico');
  const especialidadProfesional = document.getElementById('especialidad_medico');
  const matriculaProfesional = document.getElementById('matricula_medico');
  const hospitalProfesional = document.getElementById('hospital_profesional_medico');
  const clinicaProfesional = document.getElementById('clinica_profesional_medico');

  nombreMedico.addEventListener('input', function () {
    nombreApellidoProfesional.textContent = `${nombreMedico.value} ${apellidoMedico.value}`;
  });

  apellidoMedico.addEventListener('input', function () {
    nombreApellidoProfesional.textContent = `${nombreMedico.value} ${apellidoMedico.value}`;
  });

  especialidadMedico.addEventListener('input', function () {
    especialidadProfesional.textContent = especialidadMedico.value;
  });

  matriculaMedico.addEventListener('input', function () {
    matriculaProfesional.textContent = matriculaMedico.value;
  });

  hospitalMedico.addEventListener('input', function () {
    hospitalProfesional.textContent = hospitalMedico.value;
  });
  clinicaMedico.addEventListener('input', function () {
    clinicaProfesional.textContent = clinicaMedico.value;
  });
});
