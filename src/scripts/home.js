function setBackground() {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const body = document.body;

    // Condición para mostrar la noche estrellada desde las 8pm hasta las 9:35pm
    if (currentHour >= 20 || (currentHour === 21 && currentMinutes <= 35)) {
        // Entre las 8pm y las 9:35pm
        body.style.setProperty('--background-image', "url('/src/images/noche-estrellada.jpg')");
    } else {
        // Resto del día
        body.style.setProperty('--background-image', "url('/src/images/paisaje-atardecer.jpg')");
    }
}

// Llama a la función cuando se cargue la página
window.onload = setBackground;
