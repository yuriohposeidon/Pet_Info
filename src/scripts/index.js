import { loginRequest } from "./request.js";

/* ------------------------------- Function Replace ------------------------------- */

// function replaceRegister() {
//   const button__replace = document.querySelector(".button__register");
//   button__replace.addEventListener("click", () => {
//     window.location.replace("./src/pages/register.html");
//   });
// }

/* ------------------------------- Function Autorization ------------------------------- */

function authentication() {
  const token = localStorage.getItem("@petinfo: token");

  if (token) {
    window.location.replace("./src/pages/dashboard.html");
  }
}

/* ------------------------------- Function Login ------------------------------- */

function loginPetInfo() {
  const inputs = document.querySelectorAll(".input__right");
  const button = document.querySelector(".acess__button");
  const loginBody = {};
  let count = 0;
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    inputs.forEach(({ name, value }) => {
      if (value === "") {
        count++;
      }
      loginBody[name] = value;
    });
    if (count !== 0) {
      return alert("por favor preencha os campos e tente novamente");
    } else {
      await loginRequest(loginBody);
      const token = JSON.parse(localStorage.getItem("@petinfo:token"));

      console.log(token);
      return token;
    }
  });
}
loginPetInfo();
authentication();
replaceRegister();
