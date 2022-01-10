const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGrettings();
}

loginForm.addEventListener("submit", onSubmit);

function paintGrettings() {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${savedUsername}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  //show the greeting
  paintGrettings();
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
