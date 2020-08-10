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
