function toggleUnit() {
  const unit = document.getElementById("unit").value;
  const heightInput = document.getElementById("height");

  if (unit === "cm") {
    heightInput.placeholder = "Enter your height in cm";
  } else if (unit === "inch") {
    heightInput.placeholder = "Enter your height in inches";
  } else {
    heightInput.placeholder = "Enter your height in meters";
  }
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    showResult("Please enter valid values.");
    return;
  }

  // Convert height to meters
  if (unit === "cm") {
    height = height / 100;
  } else if (unit === "inch") {
    height = height * 0.0254;
  } // else, keep height as meters

  const bmi = weight / (height * height);
  const resultText = `Your BMI is ${bmi.toFixed(2)} - ${bmiCategory(bmi)}`;
  showResult(resultText);
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  else if (bmi < 24.9) return "Normal weight";
  else if (bmi < 29.9) return "Overweight";
  else return "Obese";
}

function showResult(text) {
  const resultBox = document.getElementById("resultBox");
  resultBox.textContent = text;
  resultBox.classList.remove("hidden");
}
