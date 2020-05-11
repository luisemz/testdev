import {createAll, cleanConsole, clone} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', sortCompanies(companies));

export function sortCompanies(companies) {
  const cloneCompanies = clone(companies);
  cloneCompanies.map(function(company) {
    company.name = `${company.name.charAt(0).toUpperCase()}${company.name.slice(1)}`;
    company.users = sortUsers(company.users);
    return company;
  });

  cloneCompanies.sort(compareCompanies);
  return cloneCompanies;
};

function sortUsers(users) {
  users.map(function(user) {
    user.firstName = updateName(user.firstName);
    user.lastName = updateName(user.lastName);
    return user;
  });

  users.sort(compareUsers);
  return users;
}

function compareCompanies(a, b) {
  return b.users.length - a.users.length;
}

function updateName(name) {
  if (typeof name == 'undefined') return '';
  else return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function compareUsers(a, b) {
  const nameA = `${a.firstName}${a.lastName}`;
  const nameB = `${b.firstName}${b.lastName}`;
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
