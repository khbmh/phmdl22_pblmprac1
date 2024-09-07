/*

Task-3:
Write a function to count the number of vowels in a string.


*/

function countVowels1(str) {
  arr = [];
  let spStr = str.toLowerCase().split(``);
  for (const elem of spStr) {
    if (
      elem === `a` ||
      elem === `e` ||
      elem === `i` ||
      elem === `o` ||
      elem === `u`
    ) {
      arr.push(elem);
    }
  }
  return arr.length;
}

function countVowels2(str) {
  let count = 0;
  const vowels = `aeiou`;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let count1 = countVowels2(`Hello MAY IS THE fifth month of the YEAR.`);
let count2 = countVowels2(`Hello MAY IS THE fifth month of the YEAR.`);

console.log(count1, `,`, count2);
