import { v4 as uuid } from "uuid";
import { baseUrl } from "./main";

const carToCreateBody = {
  id: uuid(),
  name: "Ford Fiesta",
  color: "grey",
  amountInStock: 20,
};

const createCarForm = document.querySelector("[data-create-car]");

// Salve o carro no banco e mostre-o na listagem sem ter que recarregar a página
createCarForm.onsubmit = (event) => {
  event.preventDefault();
};

// fetch(`${baseUrl}/cars`, {
//   method: "POST",
//   headers: {
//     "Content-type": "application/JSON",
//   },
//   body: JSON.stringify(carToCreateBody),
// });
