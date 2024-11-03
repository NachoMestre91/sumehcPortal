<?php
// Iniciar sesión si es necesario (opcional)
session_start();

// Capturar los datos del formulario
$nombre_contacto = $_POST['nombre_contacto'];
$apellido_contacto = $_POST['apellido_contacto'];
$email_contacto = $_POST['email_contacto'];
$telefono_contacto = $_POST['telefono_contacto'];
$mensaje_contacto = $_POST['mensaje_contacto'];

// Preparar el contenido del correo
$to = 'mestrenacho1991@gmail.com'; // Cambia esto por el correo del destinatario
$subject = 'Consulta de Contacto';
$message = "
    <h3>Consulta de Contacto</h3>
    <ul>
        <li><strong>Nombre:</strong> $nombre_contacto</li>
        <li><strong>Apellido:</strong> $apellido_contacto</li>
        <li><strong>Email:</strong> $email_contacto</li>
        <li><strong>Teléfono:</strong> $telefono_contacto</li>
        <li><strong>Mensaje:</strong> $mensaje_contacto</li>
    </ul>
";

// Para enviar un correo HTML, se debe establecer el encabezado Content-type
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// También puedes agregar más encabezados
$headers .= 'From: ' . $email_contacto . "\r\n"; // Remitente
$headers .= 'Reply-To: ' . $email_contacto . "\r\n"; // Responder a

// Enviar el correo
if(mail($to, $subject, $message, $headers)) {
    // Redirigir a la página de confirmación
    header('Location: confirmacion.html');
    exit();
} else {
    echo "Error al enviar el correo. Intenta nuevamente.";
}
?>
