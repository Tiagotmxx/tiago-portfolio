/**
 * Grades is an app that asks the user for grades until the usar cancels, and then
 * calculates the average of all grades
 * 
 * the average is calculate like this:
 * 
 * avg = (grade1 + grade2 + ...) / numberofgrades
 *  */


// let totalSumOfGrades
// let totalNumberOfGrades
// let userInput 
// let yesOrNo = 'Yes'
// while (yesOrNo != 'No') {
//     yesOrNo = prompt ("Do you want to continue? Yes or No"); 
//     userInput = +prompt ("Insert a new grade");
//     totalSumOfGrades += userInput;
//     ++totalNumberOfGrades;
    
// }

// let average = totalSumOfGrades / totalNumberOfGrades;
// alert (average);

let totalSumOfGrades = 0;
let totalNumberOfGrades = 0;
let userInput = 0;
while (true) {
    userInput = +prompt ("Insert a new grade or write No when you don't have any more grades to add");
    if (!userInput) {
        break;
    }
    totalSumOfGrades += userInput;
    ++totalNumberOfGrades;   
}

let average = totalSumOfGrades / totalNumberOfGrades;
alert (average);





let totalSumOfGrades = 0;
let totalNumberOfGrades = 0;
let userInput = 0;
while (true) {
    userInput = +prompt ("Insert a new grade or write No when you don't have any more grades to add");
    if (userInput > 20) {
        alert ('Insert a number between 1 and 20');
        break;
    } else if (!userInput) {
        break;
    }
    totalSumOfGrades += userInput;
    ++totalNumberOfGrades;   
}

let average = totalSumOfGrades / totalNumberOfGrades;
alert (average);
