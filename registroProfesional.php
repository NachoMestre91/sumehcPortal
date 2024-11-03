<?php
// Iniciar sesión si es necesario (opcional)
session_start();

// Capturar los datos del formulario
$nombre = $_POST['nombre_prestador'];
$apellido = $_POST['apellido_prestador'];
$email = $_POST['email_prestador'];
$telefono = $_POST['telefono_prestador'];
$dni = $_POST['dni_prestador'];
$provincia = $_POST['provincia'];
$hospital = $_POST['hospital_prestador'];
$clinica = $_POST['clinica_prestador'];
$especialidad = $_POST['especialidad_prestador'];

// Preparar el contenido del correo
$to = 'mestrenacho1991@gmail.com'; // Cambia esto por el correo del destinatario
$subject = 'Datos del Prestador';
$message = "
    <h3>Datos del Prestador</h3>
    <ul>
        <li><strong>Nombre:</strong> $nombre</li>
        <li><strong>Apellido:</strong> $apellido</li>
        <li><strong>Email:</strong> $email</li>
        <li><strong>Teléfono:</strong> $telefono</li>
        <li><strong>DNI:</strong> $dni</li>
        <li><strong>Provincia:</strong> $provincia</li>
        <li><strong>Hospital:</strong> $hospital</li>
        <li><strong>Clinica:</strong> $clinica</li>
        <li><strong>Especialidad:</strong> $especialidad</li>
    </ul>
";

// Para enviar un correo HTML, se debe establecer el encabezado Content-type
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// También puedes agregar más encabezados
$headers .= 'From: ' . $email . "\r\n"; // Remitente
$headers .= 'Reply-To: ' . $email . "\r\n"; // Responder a

// Enviar el correo
if(mail($to, $subject, $message, $headers)) {
    // Redirigir a la página de confirmación
    header('Location: confirmacion.html');
    exit();
} else {
    echo "Error al enviar el correo. Intenta nuevamente.";
}
?>
