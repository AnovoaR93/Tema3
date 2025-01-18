// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el formulario y el mensaje de éxito
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");

    // Escucha el evento de envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario
        successMessage.classList.remove("hidden"); // Muestra el mensaje de éxito
        form.reset(); // Limpia el formulario
    });
});