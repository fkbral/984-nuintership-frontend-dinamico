import "./style.css";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const makeFakeVehicle = faker.vehicle;
const numberToGenerate = 50;

const vehicles = Array.from({ length: numberToGenerate }).map((_, index) => ({
  id: uuid(),
  // id: index + 1,
  name: makeFakeVehicle.vehicle(),
  color: makeFakeVehicle.color(),
  amountInStock: parseInt(faker.random.numeric(2)),
  fuel: makeFakeVehicle.fuel(),
}));

// console.log(JSON.stringify(vehicles, null, 2));
console.log(vehicles);
