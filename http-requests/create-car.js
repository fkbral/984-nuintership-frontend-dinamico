import { v4 as uuid } from "uuid";
import { baseUrl, carListElementTemplate, carListUl, renderCar } from "./main";

const createCarForm = document.querySelector("[data-create-car]");

// Salve o carro no banco e mostre-o na listagem sem ter que recarregar a página
createCarForm.onsubmit = async (event) => {
  event.preventDefault();
  const nameInput = event.target.querySelector("#name");
  const colorInput = event.target.querySelector("#color");
  const amountInStockInput = event.target.querySelector("#amountInStock");

  const carToCreateBody = {
    id: uuid(),
    name: nameInput.value,
    color: colorInput.value,
    amountInStock: parseInt(amountInStockInput.value),
  };

  const response = await fetch(`${baseUrl}/cars`, {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify(carToCreateBody),
  });

  const createdCar = await response.json();

  renderCar(createdCar, carListElementTemplate, true, carListUl);

  event.target.reset();
};
