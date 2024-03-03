const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    let html = "";
    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      html += `<div style="width: ${width}px; height: ${height}px; background-color: ${color}"></div>`;
      width += 10;
      height += 10;
    }

    boxesContainer.insertAdjacentHTML("beforeend", html);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
