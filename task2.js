/*

Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0


*/
function findRepeat(num, arr) {
  let count = 0;
  for (const elem of arr) {
    if (elem === num) {
      count++;
    }
  }
  return count;
}

// Sample input 1
const numbers1 = [5, 6, 11, 12, 98, 5];
const find1 = 5;
console.log(`Count of ${find1}: ${findRepeat(find1, numbers1)}`); // Output: Count of 5: 2

// Sample input 2
const numbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25;
console.log(`Count of ${find2}: ${findRepeat(find2, numbers2)}`); // Output: Count of 25: 0
