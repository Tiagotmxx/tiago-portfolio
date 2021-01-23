"use strict";

//Alert added by and external file
// alert("I'm JavaScript in an external script");


//Variables
    //task1
let admin;
let name;

name = 'John';

admin = name;

alert (admin);

    //task2
let ourPlanetName = 'Earth';

let currentUser = 'John'; 
let currentUserName = 'John'; //solution provided 

    //task3 - see https://javascript.info/variables

//Data types
    //What is the output of the script?
    let name = "Ilya";

    alert( `hello ${1}` ); // ? hello 1
    
    alert( `hello ${"name"}` ); // ? hello "name"
    
    alert( `hello ${name}` ); // ? hello Ilya

//Interaction
    //Create a web-page that asks for a name and outputs it.

    //How I did it
    let name 
    prompt('What is your name?', name); //WRONG

    //Correct solution
    let name = prompt('What is your name?', '');
    alert(name);