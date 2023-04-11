import { baseUrl, renderCar } from "./main";
const carDiv = document.querySelector("[data-car]");

const searchParams = window.location.search;
const [, id] = searchParams.split("id=");

fetch(`${baseUrl}/cars/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((car) => renderCar(car, carDiv, false));
