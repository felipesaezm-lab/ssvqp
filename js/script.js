// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // 🔹 Mostrar alerta al entrar en la página
  alert('¡Bienvenido a SyncServe VQP!');

  // 🔹 Obtener el botón que activa el correo (si existe)
  const botonExplorar = document.getElementById('tu-id-de-boton');

  if (botonExplorar) {
    botonExplorar.addEventListener('click', () => {
      window.location.href = "mailto:designloftstore@gmail.com?subject=Contacto%20desde%20ssvqp.cl&body=Hola,%20quisiera%20obtener%20más%20información.";
    });
  }

  // 🔹 Botón "Volver" (si existe)
  const botonVolver = document.getElementById('btn-volver');

  if (botonVolver) {
    botonVolver.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "mailto:designloftstore@gmail.com";
    });
  }

  console.log('✅ Script cargado correctamente.');
});
