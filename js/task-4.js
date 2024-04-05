const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", requiredSubmit);

function requiredSubmit() {
  event.preventDefault();

  const loginImput = this.elements.email.value;
  const passwordImput = this.elements.password.value;

  const loginValue = loginImput.trim();
  const passwordValue = passwordImput.trim();

  const requiredData = {
    email: loginValue,
    password: passwordValue,
  };

  if (loginValue === "" || passwordValue === "") {
    alert(`All form fields must be filled in`);
  } else {
    console.log(requiredData);
    this.reset();
  }
}
