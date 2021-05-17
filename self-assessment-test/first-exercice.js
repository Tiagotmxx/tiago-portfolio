// Write a JavaScript program that:

// - Asks the user for the height in meters
// - Asks the user for the weight in kilograms
// - Calculates the Body Mass Index as BMI = kg/m^2
// - If the BMI is in the range [0 - 18.4], print the value and "underweight"
// - If the BMI is in the range [18.5 - 24.9], print the value and "normal"
// - If the BMI is in the range [25 - ], print the value and "overweight"

alert("Calculate your Body Mass Index (BMI)");
let height = +prompt("Insert height in meters");
let weight = +prompt("Insert weight in kilograms");

let BMI = weight / (height * height);
BMI = BMI.toFixed(1);

if (BMI <= 0 || BMI == "NaN") {
  alert("Insert valid numbers");
} else if (BMI > 0 && BMI <= 18.4) {
  alert(`${BMI}, underweight`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert(`${BMI}, normal`);
} else {
  alert(`${BMI}, overweight`);
}
