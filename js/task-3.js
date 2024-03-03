const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", formChecker);

function formChecker(event) {
  const finalOutput = nameInput.value.trim();

  if (finalOutput === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = finalOutput;
  }
}
