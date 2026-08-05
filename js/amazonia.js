document.addEventListener("DOMContentLoaded", () => {

    console.log("Página Amazônia carregada!");

    const titulo = document.querySelector(".titulo h1");

    titulo.addEventListener("mouseenter", () => {
        titulo.style.transform = "scale(1.05)";
        titulo.style.transition = "0.3s";
    });

    titulo.addEventListener("mouseleave", () => {
        titulo.style.transform = "scale(1)";
    });

});
