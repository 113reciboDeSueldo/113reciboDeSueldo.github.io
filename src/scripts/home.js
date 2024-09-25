function setBackground() {
    const currentHour = new Date().getHours();
    const body = document.body;

    if (currentHour >= 22 || currentHour < 8) {
        // Entre las 8pm y 8am
        body.style.setProperty('--background-image', "url('/src/images/noche-estrellada.jpg')");
    } else {
        // Entre las 8am y 8pm
        body.style.setProperty('--background-image', "url('/src/images/paisaje-atardecer.jpg')");
    }
}

// Llama a la función cuando se cargue la página
window.onload = setBackground;
