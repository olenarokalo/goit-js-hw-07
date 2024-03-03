const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", requiredSubmit);

function requiredSubmit() {
  event.preventDefault();

  const loginImput = this.elements.email.value;
  const passwordImput = this.elements.password.value;

  const loginValue = loginImput.trim();
  const passwordValue = passwordImput.trim();

  if (loginValue === "" || passwordValue === "") {
    alert(`All form fields must be filled in`);
  }

  const requiredData = {
    email: loginValue,
    password: passwordValue,
  };

  console.log(requiredData);
  this.reset();
}
