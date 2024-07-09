// const arr = [1, 2, 3, 4, 5]

// function map(arr, callback) {
//   let result = []
//   for (let i = 0; i < arr.length; i++){
//     result.push(callback(arr[i]))
//   }
//   return result;
// }
// function squareNum(num) {
//   return num * num
// }

// console.log(map(arr, squareNum))

// Expect Output: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
console.log('========Start===========')
const arr = [1, 2, 3, 4, 5]
function map(arr, callback) {
  let newArr = [];

  // Step 1: Loop Element
  for (let i = 0; i < arr.length; i++){
    // Step 2: Element * Element
    const square = callback(arr[i]);

    // Step 3: push result to new array
    newArr.push(square);
  }

  return newArr;
}

function squareNumber(num) {
  return num * num;
}

function increment(num) {
  return num + 1;
}

const a = map(arr, squareNumber);
const b = map(arr, increment);

console.log('square number:', a);
console.log('increment number:', b);
console.log('======End================')