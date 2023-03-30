document.addEventListener("DOMContentLoaded", () => {
  console.log("carregou");
});

const button = document.querySelector("[data-button-current-date]");

const element = document.createElement("a");

button.onclick = () => {
  const date = new Date();
  alert(`São ${date.getHours()} horas e ${date.getMinutes()} minutos`);
};

const navigateButton = document.querySelector("[data-button-to-end]");

navigateButton.onclick = () => {
  location.reload();
  window.location = "http://127.0.0.1:5500/aula-2/index.html#copyright";
};
