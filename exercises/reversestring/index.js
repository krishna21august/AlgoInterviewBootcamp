// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;

//***Alternative 1****///
// function reverse(str) {
//   //   const arr = str.split("");
//   //   arr.reverse();
//   //   return arr.join("");
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//*****Alternative 2******///
// function reverse(str) {
//   let reverse = "";
//   for (let character of str) {
//     reverse = character + reverse;
//   }
//   return reverse;
// }
