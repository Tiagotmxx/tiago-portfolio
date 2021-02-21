// /**
//  * Rectangle: Build an ASCII rectangle, given the number of rows and columns:
//  *
//  * *****
//  * *****
//  * *****
//  *
//  * HINT: The problem can be split into multiple sub-problems:
//  * 1. how to build one row?
//  * 2. how to repeat the process?
//  */

let rectangle = '';
let rows = +prompt('Rows?');
let columns = +prompt('Columns?');

for (i = 0; i < rows; i++) {
    let row = '';
    for (j = 0; j < columns; j++) {
        row += '*';
    }
    rectangle += row + '\n';
}
console.log(rectangle)








// Antoni solution
//  let rows = +prompt('Rows');
//  let columns = +prompt('Columns');

//  let rectangle = '';
//  for (let i = 0; i < rows; i++) {
//     //let row = '*****';

//     let row = '';
//     for (let j = 0; j < columns; j++){
//         row += '*';
//     }

//     rectangle += row + '\n';
//  } 
//  console.log(rectangle);













// /*
//  * Empty rectangle: Build an ASCII rectangle, but this time asterisks only delimit the borders and the rest is spaces.
//  *
//  * ******
//  * *    *
//  * *    *
//  * ******
//  *
//  * HINT: split the problem into multiple sub-problems:
//  *
//  * 1. how to build a 'full' row
//  * 2. how to build an 'empty' row
//  * 3. how to build the whole button, knowing that:
//  *    1. the first and last rows are always 'full'
//  *    2. all other rows in between are always 'empty'
//  */

let rows = 4;
let columns = 6;

//begin TOP ROW
let topRow ='';
for (let j = 0, j < columns; j++) {
    topRow += '*';
}
topRow += '\n';
//end TOP ROW

//begin EMPTY ROWS
let emptyRows = '';
for (let i = 0; i < rows; i++){
    let emptyRow = '    ';
    emptyRow += '*' + emptyRow'*    *\n';
}
//end EMPTY ROWS


//begin BOTTOm ROW
let bottomRow ='';
for (j = 0, j < columns; j++) {
    bottomRow += '*';
}
bottomRow += '\n';
//end BOTTOm ROW

let emptyRectangle = topRow + bottomRow;
console.log(emptyRectangle);


















/**
 * Rectangular triangle: Build an ASCII triangle, given the number of rows. The width of the triangle should be automatically calculated.
 * 
 * *
 * **
 * ***
 * ****
 * 
 * HINT: The number of asterisks is directly proportional to the row number:
 * 1    row 0 + 1 = 1
 * 12   row 1 + 1 = 2
 * 123  row 2 + 1 = 3
 * 1234 row 3 + 1 = 4
 */

// let rows = 4;

// let rightTriangle = '';
// for (let i = 0; i < rows; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += '*';
//     }

//     rightTriangle += row + '\n';
// }
// console.log(rightTriangle);

























/**
 * Isosceles triangle: Build an ASCII triangle, given the number of rows. The width and position of the triangle should be automatically calculated.
 *
 *    *
 *   ***
 *  *****
 * *******
 *
 * HINT: The number of asterisks is directly proportional to the row number:
 *    1    row 0 * 2 + 1 = 1
 *   123   row 1 * 2 + 1 = 3
 *  12345  row 2 * 2 + 1 = 5
 * 1234567 row 3 * 2 + 1 = 7
 * 
 * The number of spaces is instead inversely proportional to the row number:
 *
 * 123*    lastRow 3 - row 0
 * 12***   lastRow 3 - row 1
 * 1*****  lastRow 3 - row 2
 * ******* lastRow 3 - row 3
 */

let rows = 4;

let isoTriangle = '';
for (let i = 0; i < rows; i++) {
    let row = '';

    let lastRow = rows - 1;
    let spaces = lastRow - i;
    for (let j = 0; j < spaces; j++) {
        row += ' ';
    }

    let columns = i * 2 + 1;
    for (let j = 0; j < columns; j++) {
        row += '*';
    }
    isoTriangle += row + '\n';
}
console.log(isoTriangle);



































 
/**
 * Reversed isosceles triangle: Build an ASCII triangle, given the number of rows. It should be shown upside down.
 * 
 * *******
 *  *****
 *   ***
 *    *
 * 
 * HINT: the proportionality is similar to the previous exercise, but reversed.
 */

 