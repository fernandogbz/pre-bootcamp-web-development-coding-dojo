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

// Fragmento de código 4: hay un giro
var num = 15;
console.log(num); // 15
function logAndReturn(num2){
    console.log(num2); // 10
    return num2;
}
var result = logAndReturn(10);
console.log(result); // 10
console.log(num); // 15

// Fragmento de código 5
var num = 15;
console.log(num); // 15
function timesTwo(num2){
    console.log(num2);  // 10
    return num2*2;
}
var result = timesTwo(10);
console.log(result); // 20
console.log(num); // 15
