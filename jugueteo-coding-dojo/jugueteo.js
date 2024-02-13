// Funcion para mostrar si el niño puede subir a la montaña rusa
function muestraSiElNiñoPuedeSubirALaMontañaRusa() {
    // Altura del niño
    let alturaNiño = document.getElementById("alturaNiño").value;
    let resultado = document.getElementById("resultado");

    // Condicional para determinar si el niño puede subirse
    if (alturaNiño > 100) {
        resultado.innerHTML = "¡Súbete, chico!";
    } else {
        resultado.innerHTML = "Lo siento, Tal vez el próximo año.";
    }
}