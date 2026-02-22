import { generator } from "./dataGenerateor.js";
const gen = generator();
const dataButton = document.querySelector(".show_data");
const dataSection = document.querySelector(".data");

dataButton.addEventListener("click", () => {
  let result = gen.next();
  dataButton.textContent = "Next Post";
  setTimeout(() => {
    const div = document.createElement("div");
    const { id, name, email } = result.value;
    div.textContent = `${id} , ${name} , ${email}`;
    dataSection.appendChild(div);
  }, 300);
});
