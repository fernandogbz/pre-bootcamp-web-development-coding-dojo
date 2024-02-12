// Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?

function myBirthYearFunc(){
    console.log("Nací en " + 1980); // Nací en 1980
    }
myBirthYearFunc();


// Predicción 2: si necesitáramos enviar un año de nacimiento hacia la función, le diríamos a la función "oye, te enviaremos una variable llamada EntradaAñoNacimiento". Lo hacemos agregando el nombre de la variable entre paréntesis. Mira a continuación un ejemplo. Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log?
let EntradaAñoNacimiento = 1980;
function myBirthYearFunc2(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento); // Nací en 1980
    }
myBirthYearFunc2(EntradaAñoNacimiento);

// Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?
let num1 = 10;
let num2 = 20;
function add(num1, num2){
    console.log("¡Sumando números!"); // ¡Sumando números!
    console.log("num1 is: " + num1); // num1 is: 10
    console.log("num2 is: " + num2); // num2 is: 20
    let sum = num1 + num2;
    console.log(sum); // 30
}
add(num1, num2);