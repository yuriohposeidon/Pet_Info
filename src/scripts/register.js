import { registerRequest } from "./request.js";

/* ------------------------------- Function Replace ------------------------------- */


// export function replaceRegister() {
//   const button__replace = document.querySelector(".back__button");
//   button__replace.addEventListener("click", () => {
//     window.location.replace("../../index.html");
//   });
// }

/* ------------------------------- Function Autorization ------------------------------- */

function authentication() {
  const token = localStorage.getItem("@petinfo: token");

  if (token) {
    window.location.replace("./dashboard.html");
  }
}

/* ------------------------------- Function Register ------------------------------- */

function registerPetInfo() {
  const inputs = document.querySelectorAll(".input__left");
  const button = document.querySelector(".register__button");
  const registerBody = {};
  const form = document.querySelector(".form__container");
  let emptyInput = 0;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  });
  button.addEventListener("click", async (event) => {
    //     inputs.forEach(({name, value})){

    //     registerBody[name] = value
    // }
    inputs.forEach((input) => {
      if (input.value === "") {
        emptyInput++;
      }

      registerBody[input.name] = input.value;
    });

    if (emptyInput !== 0) {
      return alert("por favor insira os dados");
    } else {
      const newUser = await registerRequest(registerBody);

      // setTimeout(() => {
      //    window.location.replace('../../index.html')
      // }, 2000);
    }
  });
}
registerPetInfo();
authentication();
replaceRegister()
