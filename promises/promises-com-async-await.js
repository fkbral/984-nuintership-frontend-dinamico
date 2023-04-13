import "./style.css";

const soma = 1 + 2;

async function bootstrap() {
  [10, 21, 54].forEach((numero, indice, numeros) => {
    console.log({ numero, indice, numeros });
  });

  const somaPromise = (...numeros) =>
    new Promise((resolve, reject) => {
      const soma = numeros.reduce((acc, numero) => acc + numero, 0);

      if (soma > 1_000_000) {
        reject("Conta é muito complexa para ser feita"); // é como se fosse um "throw"
      }
      resolve(soma); // é como se fosse um "return"
    });

  setTimeout(() => {
    console.log(`Eu rodei após 0ms`);
  }, 0);

  try {
    const githubProfilesResponse = await fetch("https://api.github.com/users");
    const githubProfiles = await githubProfilesResponse.json();
    console.log(githubProfiles);
  } catch (error) {
    console.error(error);
  }

  const soma1 = await somaPromise(3, 5, 10);
  console.log(soma1);
  const somaComplexa = somaPromise(2_000_000, 10);

  try {
    await somaComplexa;
    const soma2 = await somaPromise(10, 5);
    console.log(soma2);
  } catch (error) {
    console.error(error);
    throw error;
  }

  console.log(soma);
}

bootstrap();
