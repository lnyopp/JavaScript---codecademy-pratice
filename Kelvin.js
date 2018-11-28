//set kevlin equal to 293 to represent temperature in degrees kelvin.This variable will not change.
const kelvin = 0;

//celsius is a const variable, as it will not change, and it is equal degrees kevlin - 273.
const celsius = kelvin - 273;
// this equation converts degrees celsius to fahrenheit. This variable will change, because in the  the next step will be to round the result, so it is delared by "let".
let fahrenheit = celsius * (9/5) + 32;

// rounding the result from the previous calculation down to the nearest integer.
fahrenheit = Math.floor(fahrenheit);
// using string interpolation and template literals to log the statement to print the result in the console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// using string interpolation and template literals to print the statement and result together in the console.
let newton = celsius * (33/100);

//rounding result down to the nearest integer.
newton = Math.floor(newton);

// using string interpolation and template literals to print the statement and result together in the console.
console.log(`The temperature is ${newton} degrees newton`);
