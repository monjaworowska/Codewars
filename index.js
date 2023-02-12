//1. function that takes a String and returns an Array/list with the length of each word added to each element.
//"apple ban" --> ["apple 5", "ban 3"]
function addLength(str) {
  return str.split(" ").map((el) => el + " " + el.length);
}

//2. return an array containing all of the strings in the input array except those that match strings in geese
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b) => !geese.includes(b));
}

//3. invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
function invert(array) {
  return array.map((el) => -el);
}

//4. [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}

//5. Return the average of the given array rounded down to its nearest integer.
const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

//6. Function that takes an array of numbers and returns the sum of the numbers.
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//7.

//8.

//10.
