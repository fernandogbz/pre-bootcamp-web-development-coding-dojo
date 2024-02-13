// Fragmento de código 1 
function hello() {
    console.log('hello'); // hello
}
hello();
console.log('Dojo'); // Dojo

// Fragmento de código 2
function hello() {
    console.log('hello'); // hello
    return 15;
}
var result = hello();
console.log('result is', result); // result is 15

// Fragmento de código 3
function numPlus(num) {
    console.log('num is', num); // num is 3
    return num+15;
}
var result = numPlus(3);
console.log('result is', result); // result is 18

