/*

Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming


*/

function longestWord(str) {
  /*
   * split the string into words
   * compare the words length to each other
   * store the longest word in a variable
   * return the variable
   */
  let longest = ``;
  let wordsOfStr = str.split(` `);
  for (const word of wordsOfStr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

let str = `I am learning Programming to become a programmer`;
console.log(longestWord(str));
