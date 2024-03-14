const keyValue = document.getElementById(`key`);
const codeValue = document.getElementById(`code`);
const keyCodeValue = document.getElementById(`keyCode`);

window.addEventListener(`keydown`, (e) => {
  e.code === "Space"
    ? (keyValue.textContent = "Space")
    : (keyValue.textContent = e.key);
  codeValue.textContent = e.code;
  keyCodeValue.textContent = e.key.charCodeAt(0);
});
