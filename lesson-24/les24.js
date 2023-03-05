let firsNumber;
let secondNumber;

function sum(firsNumber, secondNumber) {
    if (typeof firsNumber === 'number' && typeof secondNumber === 'number') {
       return firsNumber + secondNumber;
    } 
}
console.log(sum(12, 12));

function differ(firsNumber, secondNumber) {
    if (typeof firsNumber === 'number' && typeof secondNumber === 'number') {
       return firsNumber - secondNumber;
    } 
}
console.log(differ(12, 12));

function multiply(firsNumber, secondNumber) {
    if (typeof firsNumber === 'number' && typeof secondNumber === 'number') {
       return firsNumber * secondNumber;
    } 
}
console.log(multiply(12, 12));

function divide(firsNumber, secondNumber) {
    if (typeof firsNumber === 'number' && typeof secondNumber === 'number') {
       return firsNumber / secondNumber;
    } 
}
console.log(divide(12, 12));

const numbers = [13, 1, 45, 'lemon', -2, 3, 4, 5, 6, 7];

function findMaxNumber(arr) {
  let maxNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
  }
  return maxNumber;
}

function findMinNumber(arr) {
  let minNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] < minNumber) {
        minNumber = arr[i];
      }
    }
  }
  return minNumber;
}

console.log(findMaxNumber(numbers));
console.log(findMinNumber(numbers)); 

