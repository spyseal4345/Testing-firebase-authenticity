import { auth } from "./config.js";
import { Validation } from "./validation.js";

const input = document.querySelectorAll("input");
const loginBtn = document.querySelector(".login-button");
const infoError = document.querySelectorAll(".info-error");

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const [email, password, confirmPassword] = input;

  const validation = new Validation(
    email.value,
    password.value,
    confirmPassword.value
  );
  const [iptEmail, iptPassword, iptCfpassword] = infoError;

  if (isEmpty(validation.error)) {
    validation.showHideErr(iptEmail, "none", validation.error.email, "blue");
    validation.showHideErr(iptPassword, "none", validation.error.email, "blue");
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });   
  } else {
    if (validation.error.email) {
      validation.showHideErr(
        iptEmail,
        "block",
        validation.error.email,
        "red",
        "red"
      );
    }
    if (validation.error.password) {
      validation.showHideErr(
        iptPassword,
        "block",
        validation.error.email,
        "red",
        "red"
      );
    }
  }
});
