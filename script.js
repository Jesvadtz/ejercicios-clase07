// Ejercicio 01: Crea una función flecha en JS que obtenga el elemento más frecuente en un Array.
let arrayNum = [2, 5, 6, 7, 10, 34, 22, 1, 2, 4, 6, 6, 34, 22, 10, 22, 34, 22];
let itemMax = 0;
let actual = 0;
let suma = 0;

let repeatNum = (arrayX) => {
  arrayX.sort().forEach((num) => {
    if (num !== null) {
      actual = num;
    }
  });
};

repeatNum(arrayNum);

// Ejercicio 02: Crea una función flecha en JS que acomode en orden ascendente los elementos de un Array.
let arrayName = [
  "Jessica",
  "Angel",
  "Monserrat",
  "Jair",
  "Blanca",
  "Ignacio",
  "Hector",
  "Griselda",
];

//Darle orden al array
let orden = (array) => {
  array.sort();
  console.log(array);
};

orden(arrayName);

//Ejercicio 04: Crea una función flecha en JS que dada una palabra intercale los caracteres de la misma entre mayúsculas y minúsculas (por ejemplo: "Hola" sería "hOlA").

let word = "Jessica";
let character = "";
let newWord = "";

let ordenWord = () => {
  for (let i = ""; i < word.length; i++) {
    if (i % 2 === 0 || i === 1) {
      character = word[i];
      console.log(character);
    }
  }
};
ordenWord(word);

//Ejercicio 05: Crear una función flecha en JS que sea capaz de sumar los valores númericos de los elementos con mismo índice dados dos Arrays (por ejemplo: [1, 2, 3, 4, 5] + [2, 3, 4, 5, 6] = [3, 5, 7, 9, 11]).

let array01 = [2, 3, 4, 5, 8];
let array02 = [7, 8, 9, 10, 11];
let result = [];

let plus = 0;
let digito01 = 0;
let digito02 = 0;

let sumaArrays = (n1, n2) => {
  for (let i = 0; i < array01.length; i++) {
    digito01 = array01[i];
    digito02 = array02[i];

    plus = digito01 + digito02;
    result.push(plus);
  }
  console.log(result);
};

sumaArrays(array01, array02);