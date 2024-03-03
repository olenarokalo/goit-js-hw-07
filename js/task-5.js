const nameOFTheColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeBtn.addEventListener("click", changerOfTheColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changerOfTheColor() {
  const randomHex = getRandomHexColor();

  body.style.backgroundColor = randomHex;
  nameOFTheColor.textContent = randomHex;
}
