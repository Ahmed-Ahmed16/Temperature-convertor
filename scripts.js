// let f = prompt("enter farenheit");
// let c = (f - 32) * 5/9;


// function farenheitToCelsius(farenheit) {
//     return (farenheit - 32) * 5/9 ;
// }

let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
let celsius = Math.round((fahrenheit - 32) * 5/9).toFixed(1);
alert("The temperature in celsius is:  "+celsius);