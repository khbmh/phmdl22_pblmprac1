/*

Task-5:
Generate a random number between 10 to 20.

*/

function randomNum(min = 10, max = 20) {
  let num = Math.round(Math.random() * Math.abs(max - min)) + Math.min(max, min);
  return num;
}


let num = randomNum(1,10)

console.log(num);