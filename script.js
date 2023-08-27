const d = document;
const form = d.getElementById("form");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const weight = d.getElementById("weight").value;
  const height = d.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  let description = "";

  value.classList.add('attention');

  d.getElementById("infos").classList.remove("hidden");

  if (bmi > 40) {
    description = "Cuidado! você está com obesidade mórbida!";
  } else if (bmi > 35) {
    description = "Cuidado! você está com obesidade severa!";
  } else if (bmi > 30) {
    description = "Cuidado! você está com obesidade moderada!";
  } else if (bmi > 25) {
    description = "Cuidado! você está com sobrepeso!";
  } else if (bmi > 18.5) {
    description = "Você está no peso ideal!";
    value.classList.remove('attention');
    value.classList.add('normal');
  } else {
    description = "Cuidado! Você está abaixo do peso.";
  }

  d.getElementById("value").textContent = bmi.replace(".", ",");
  d.getElementById("description").textContent = description;
});
