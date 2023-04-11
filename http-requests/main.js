import "./style.css";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export const baseUrl = "http://localhost:3000";
const carListElementTemplate = document.querySelector(
  "[data-car-list-element]"
);
const carListUl = document.querySelector("[data-car-list]");

fetch(`${baseUrl}/cars`)
  .then((response) => {
    return response.json();
  })
  .then((cars) =>
    cars.forEach((car) =>
      renderCar(car, carListElementTemplate, true, carListUl)
    )
  );

export function renderCar(car, carUiElement, isTemplate = false, carUl) {
  const carListElement = isTemplate
    ? carUiElement.cloneNode(true).content
    : carUiElement;
  carListElement.querySelector("[data-car-name]").innerText = car.name;
  carListElement.querySelector("[data-car-color]").innerText = car.color;
  carListElement.querySelector("[data-car-amount]").innerText =
    car.amountInStock;

  carListElement.querySelector("a").href = `car.html?id=${car.id}`;

  if (carUl) {
    carUl.append(carListElement);
  }
}
