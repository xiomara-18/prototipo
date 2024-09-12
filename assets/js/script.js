document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener el valor ingresado en el campo de contraseña
    const contrasenaIngresada = document.getElementById('contrasena').value;

    // Verificar si la contraseña es correcta
    if (contrasenaIngresada === 'agosto 19') {
        // La contraseña es correcta, redirigir a otra página o mostrar un mensaje de éxito
        alert('Ingreso exitoso. Bienvenido!');
        window.location.href = 'ENCRIPTADO.html'; // Cambia a la página de destino deseada
    } else {
        // La contraseña es incorrecta, mostrar el mensaje de error
        document.getElementById('errorMessage').style.display = 'block';
    }
});