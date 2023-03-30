const colorWheel = document.querySelector("[data-color-picker]");
console.log(colorWheel);

const input = document.createElement("input");
colorWheel.onchange = (event) => {
  console.log(event.target);

  document.body.style.backgroundColor = event.target.value;
};
