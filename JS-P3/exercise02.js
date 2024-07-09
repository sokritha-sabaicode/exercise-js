let arr = [1, 2, 3, 4, 5, 6];

function processArr(arr, callback) {
  let result = [];//declare empty new array to store
  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])) {//condition to execute code block when condition is true
      result.push(arr[i]);// to appeand arr[i] to result
    }
  }
  return result;
}

function even(num) {
  return num % 2 == 0;// return true or false
}

function odd(num) {
  return num % 2 !== 0;
}

console.log(processArr(arr, even));
console.log(processArr(arr, odd))