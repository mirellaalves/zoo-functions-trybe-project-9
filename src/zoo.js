/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

// 1- Implemente a função animalsByIds:
// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(...ids) {
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

// 2- Implemente a função animalsOlderThan:
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais
// desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return data.animals.find(anima => anima.name === animal)
                      .residents.every(anima => anima.age >= age);
}

// 3- Implemente a função employeeByName:
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
function employeeByName(employeeName) {
  return data.employees.find(
    person => person.firstName === employeeName || person.lastName === employeeName,
  ) || {};
}

// 4- Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// 5- Implemente a função isManager:
// Testa se o id passado é de um gerente
function isManager(id) {
  return data.employees.some(manager => manager.managers.find(i => i === id));
}

// 6- Implemente a função addEmployee:
// Adiciona um funcionário no fim da lista
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}


function schedule(dayName) {
  const cronograma = {};
  if (dayName) {
    cronograma[dayName] = checkSchedule(dayName);
    return cronograma;
  }
  Object.keys(data.hours).forEach((day) => {
    cronograma[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    if (day === 'Monday') cronograma[day] = 'CLOSED';
  });
  return cronograma;
};
const checkSchedule = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
};

// 11- Implemente a função oldestFromFirstSpecies:
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo
// funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
function oldestFromFirstSpecies(id) {
  return Object.values(data.animals
    .find(employee => employee.id === data.employees
      .find(animal => animal.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age)[0]);
}

// 12- Implemente a função increasePrices:
// Ao passar uma porcentagem, incrementa todos os preços, arrendondados em
// duas casas decimais
function increasePrices(percentage) {
  return Object.keys(data.prices).forEach((price) => {
    (data.prices[price] = Math.round(data.prices[price] * (1 + (percentage / 100)) * 100) / 100);
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
