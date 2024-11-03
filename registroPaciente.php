<?php
// Iniciar sesión si es necesario (opcional)
session_start();

// Capturar los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$dni = $_POST['dni'];
$obrasocial = $_POST['obrasocial'];
$numeroobrasocial = $_POST['numeroobrasocial'];
$provincia = $_POST['provincia'];
$ciudad = $_POST['ciudad'];
$domicilio = $_POST['domicilio'];

// Preparar el contenido del correo
$to = 'mestrenacho1991@gmail.com'; // Cambia esto por el correo del destinatario
$subject = 'Registro de Paciente';
$message = "
    <h3>Datos del Paciente</h3>
    <ul>
        <li><strong>Nombre:</strong> $nombre</li>
        <li><strong>Apellido:</strong> $apellido</li>
        <li><strong>Email:</strong> $email</li>
        <li><strong>Teléfono:</strong> $telefono</li>
        <li><strong>DNI:</strong> $dni</li>
        <li><strong>Obra Social:</strong> $obrasocial</li>
        <li><strong>ID Obra Social:</strong> $numeroobrasocial</li>
        <li><strong>Provincia:</strong> $provincia</li>
        <li><strong>Ciudad:</strong> $ciudad</li>
        <li><strong>Domicilio:</strong> $domicilio</li>
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
