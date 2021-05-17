// Refactor your program so it:

// - Uses at least one function
// - Uses a loop to continue asking for input or has an HTML user interface

//alert("Calculate your Body Mass Index (BMI)");

// alert(calcBMI(height, weight));

window.onload = () => {
  let button = document.getElementById("button");

  button.addEventListener("click", calcBMI);
};

function calcBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("result");

  let BMI = weight / (height * height);
  BMI = BMI.toFixed(1);

  if (BMI <= 0 || BMI == "NaN") {
    return (result.innerHTML = `Insert valid numbers`);
  } else if (BMI > 0 && BMI < 18.4) {
    return (result.innerHTML = `${BMI}, underweight`);
  } else if (BMI > 18.5 && BMI < 24.9) {
    return (result.innerHTML = `${BMI}, normal`);
  } else {
    return (result.innerHTML = `${BMI}, overweight`);
  }
}
