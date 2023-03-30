const numero = 300;

const userName = "Joana";

// existe a document API
// método write escreve HTML na tela
document.write("<h3>Teste</h3>");
document.write(numero);

// para manipular algo que existe
// const heading = document.getElementById('title')
const heading = document.querySelector("#title");
console.log(heading.innerText);

const userSpan = document.querySelector("span");

// if(userSpan){
//   userSpan.innerText = userName
// }

// const userSpan = document.querySelector('span')
// userSpan.innerText = userName
// const userSpans = document.querySelectorAll('span');
// const userSpans = document.querySelectorAll('.user-name');
const userSpans = document.querySelectorAll("[data-user-name]");
// const userSpansArray = [...userSpans];
[...userSpans].forEach((span) => (span.innerText = userName));
