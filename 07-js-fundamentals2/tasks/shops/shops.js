/**
 * Problem: the shops asks the user for the price and quantity of two items, 
 * and outputs the amount of the total sale
 */

//two items
//for each item get the price and quantity from user
//  get price -> prompt()
//  get the quantity -> prompt()
//calculate total sale -> price1 * quantity1 + price2 * quantity2
//output it -> alert() / console.log()

//get price and quantity for first item
let price1;
let quantity1;

price1 = prompt("Give me the first item's price", 0);
quantity1 = prompt("Give me the first item's quantity", 0);

//get price and quantity for second item
let price2 = prompt("Give me the second item's price", 0);
let quantity2 = prompt("Give me the second item's quantity", 0);

//calculate the total sale
let total = price1*quantity1 + price2*quantity2;

//Show the result to the user
alert(`The total amount is ${total}.`);