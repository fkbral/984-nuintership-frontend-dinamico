import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
faker.setLocale("pt_BR");

// Caitlyn Kerluke
const randomName = faker.name.fullName();

// Rusty@arne.info
const randomEmail = faker.internet.email();

const randomWord = faker.word.noun({ length: { min: 2, max: 4 } });

console.log(randomName);
console.log(randomEmail);
console.log(randomWord);
