/*Variable declaration statement */
let hello, goodbye;
hello = "Hello";
let world = "World"
 
let result;
let number = 20;

2*(15 + 15) // console.log() --> 60

// Concation operation on strings
"Hello" + "5" // "Hello 5"
let concatanation = hello + world;

let bolleanVariable = true;
let bolleanVariableF = false;

// OR AND

if(hello != "Hello" || number > 20 || world !== "Underworld") {
    console.log("hello world")
} else {
    console.log("Goodbye Underworld")
}

//console.log(typeof number); --> "number"

//console.log(hello instanceof String) --> true or false

result = 0;
console.log("Rezultatot e: " + result);

/*Function declaration statement */
function zbirOdDvaBroja(a, b) {
   result = a + b;
}

zbirOdDvaBroja(number, 5);
console.log("Rezultatot e: " + result);

/*
 varible o will be have similar structure to this one:

 {
     a: 1,
     b: 2,
     hello: "Hello World" ...
 }
 */
let o = new Object();

/*
varible a will have similar structure to this one:

 ["1", 5, true, "Hello World"] 
*/
let a = new Array(); 
/* Find the h1 tag inside index.html */
let h1_hello = document.querySelector("h1");

h1_hello.textContent = hello;
