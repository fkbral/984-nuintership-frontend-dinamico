import "./style.css";

const soma = 1 + 2;

const somaPromise = (numero1, numero2) =>
  new Promise((resolve, reject) => {
    resolve(numero1 + numero2);
  });

setTimeout(() => {
  console.log(`Eu rodei após 0ms`);
}, 0);

somaPromise(3, 5).then((value) => {
  console.log(value);

  somaPromise(10, 5).then((value) => {
    console.log(value);
    console.log(soma);
  });
});
