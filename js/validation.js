export class Validation {
  constructor(email, password, confirmPassword) {
    this.error = {};
    this.isEmailValid(email);
    this.isPasswordValid(password, confirmPassword);
  }

  isEmailValid(email) {
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(email)) {
      console.log("Email correct");
    } else {
      this.error.email = "Vui lòng nhập đúng email";
    }
  }

  isPasswordValid(password, confirmPassword) {
    if (password.length < 8) {
      this.error.password = "Mật khẩu quá ngắn";
    }
    if (password !== confirmPassword) {
      this.error.confirmPassword = "Mật khẩu không khớp";
    }
  }
  showHideErr(element, display, messErr, boderColor, color = "inherit") {
    element.style.display = display;
    element.textContent = messErr;
    element.previousElementSibling.style.boderColor = boderColor;
    element.previousElementSibling.previousElementSibling.style.color = color;
  }
}
