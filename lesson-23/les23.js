const arr = [13, 1, 45, 'lemon', -2, 3, 4, 5, 6, 7];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){ 
    sum = sum + arr[i];
    }
    }
console.log(sum);

let min = Infinity;
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log('Min:' + min + " " + 'Max:' + max);

let str = '';
let grate = '#';
for (let i = 1; i <6; i++) {
  str += grate;
  console.log(str);
}





