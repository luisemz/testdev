import {cleanConsole, createAll} from './data';
import {groupUsers} from './example-4';

const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', usersAverage(companies));

function usersAverage(companies) {
  const users = groupUsers(companies);
  const size = users.length;
  let ageTotal = 0;
  let sizeCar = 0;
  let ageTotalCar = 0;
  users.forEach(function(user) {
    ageTotal += user.age;
    sizeCar += user.car ? 1 : 0;
    ageTotalCar += user.car ? user.age : 0;
  });
  return {
    size,
    average: ageTotal / size,
    hasCar: sizeCar,
    averageWithCar: ageTotalCar / sizeCar,
  };
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
