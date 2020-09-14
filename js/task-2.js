//Ex1
/*const getItemsString = function (array) {
  let result = "";
  if (array === 0) {
  } else {
    for (let i = 0; i < array.length; i += 1) {
      result += `${i + 1} - ${array[i]}\n`;
    }
  }
  return result;
};*/

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

//Ex2
/*const calculateEngravingPrice = function (message = "", pricePerWord = 0) {
  return message.split(" ").length * pricePerWord;
};*/

//Ex3
/*function findLongestWord(string = "") {
  const words = string.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Google do a roll"));*/

//Ex4
/*function formatString(string, maxLength = 5) {
  string =
    string.split("").length >= maxLength
      ? `${string.slice(0, maxLength)}...`
      : string;
  return string;
}
const formatString = (string) =>
    string.length > 40 ? `${string.slice(0, 41)}...` : string;* /
  //console.log(formatString("Cu"));*/

//Ex5
/*function checkForSpam(str) {
  // Write code under this line
  let strForCheck = str.toLowerCase();
  return strForCheck.includes(`spam`) || strForCheck.includes(`sale`);
}*/

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//Ex6
/*function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    numbers.push(array[i] * 10);
  }
  return numbers;
}
console.log(mapArray([-2.5, 0, 2.5]));

function mapArray(array) {

  let numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    array[i] *= 10;
    numbers = array;
  }
  return numbers;
}*/

//Ex7
/*function filterArray(array) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i])) { numbers.push(array[i]) }
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

//console.log(filterArray([1, NaN, Infinity]));
// [1]

//console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]*/

//Ex8
/*function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    total += array[i]
  }
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5
*/

//Ex9
/*function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let loginLength = login.length;
  return loginLength >= 4 && loginLength <= 16;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  // Write code under this line
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
  if (!isLoginValid(login)) {
    return ERROR;
  } else if (!isLoginUnique(allLogins, login)) {
    return REFUSAL;
  } else {
    allLogins.push(login);
    return SUCCESS;
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' */