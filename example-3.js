import {cleanConsole, createAll} from './data';
// import {cleanConsole, createAll, clone} from './data';
// import {sortCompanies} from './example-1';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', validateNames(companies));

function validateNames(companies) {
  let capitalized = true;
  // const cloneCompanies = clone(sortCompanies(companies));

  companies.forEach(function(company) {
    if (typeof company.name == 'undefined'
        || company.name != capitalizeName(company.name)) capitalized = false;
    company.users.forEach(function(user) {
      if (typeof user.firstName == 'undefined'
          || user.firstName != capitalizeName(user.firstName)) capitalized = false;
      if (typeof user.lastName == 'undefined'
          || user.lastName != capitalizeName(user.lastName)) capitalized = false;
    });
  });

  return capitalized;
}

function capitalizeName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
