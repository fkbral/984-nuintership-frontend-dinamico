import "./style.css";

const timerMs = 1000;

const myInterval = setInterval(() => {
  console.log(`Eu rodei após ${timerMs}ms`);
}, timerMs);

console.log(myInterval);
console.log(typeof myInterval);

setTimeout(() => {
  clearInterval(myInterval);
}, 2500);

console.log("Console executado");
