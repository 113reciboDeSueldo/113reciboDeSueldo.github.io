function setBackground() {
    const currentHour = new Date().getHours();
    const body = document.body;
    const buttons = document.querySelectorAll('button');

    // Entre las 8pm y las 8am
    if (currentHour >= 20 || currentHour < 9) {
        // Fondo de noche estrellada
        body.style.setProperty('--background-image', "url('/src/images/noche-estrellada.jpg')");

        // Estilo celeste para los botones
        buttons.forEach(button => {
            button.style.backgroundColor = "#BBE4FC";
            button.style.color = "#095583";
            button.addEventListener('mouseover', function() {
                button.style.backgroundColor = "#095583";
                button.style.color = "#BBE4FC";
            });
            button.addEventListener('mouseout', function() {
                button.style.backgroundColor = "#BBE4FC";
                button.style.color = "#095583";
            });
        });
    } else {
        // Entre las 8am y las 8pm
        body.style.setProperty('--background-image', "url('/src/images/paisaje-atardecer.jpg')");

        // Estilo rosado para los botones
        buttons.forEach(button => {
            button.style.backgroundColor = "#de99e7";
            button.style.color = "#500a59";
            button.addEventListener('mouseover', function() {
                button.style.backgroundColor = "#500a59";
                button.style.color = "#de99e7";
            });
            button.addEventListener('mouseout', function() {
                button.style.backgroundColor = "#de99e7";
                button.style.color = "#500a59";
            });
        });
    }
}

// Llama a la función cuando se cargue la página
window.onload = setBackground;
