
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact__form");
    const messageBox = document.getElementById("contactMessage");

    // Evento de envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#nombre").value.trim();
        const email = form.querySelector("#email").value.trim();
        const msg = form.querySelector("#mensaje").value.trim();
        const button = form.querySelector(".contact__button");

        // Validaciones
        if (!name || !email || !msg) {
            showMessage("Por favor, completá todos los campos.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showMessage("Por favor, ingresá un correo electrónico válido.", "error");
            return;
        }

        // Animación de envío
        button.disabled = true;
        button.textContent = "Enviando...";

        setTimeout(() => {
            button.disabled = false;
            button.textContent = "Enviar";
            form.reset();
            showMessage("¡Mensaje enviado con éxito!", "success");
        }, 2000);
    });

    // Validar email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Mostrar mensajes de validación
    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = `contact__message contact__message--${type}`;
        messageBox.style.opacity = 1;
        setTimeout(() => {
            messageBox.style.opacity = 0;
        }, 3000);
    }

    // Animación de aparición
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(document.querySelector(".contact"));
});