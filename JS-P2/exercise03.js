// Write an arrow function that
// that take an array of numbers as a parameter and
// returns the average of those numbers
let arr = [1, 2, 3, 4, 5]

let avg = (arr) => {
  let sum = 0;
  // step 1: summation all elements in array
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }

  // total sum / number of element in array
  return sum / arr.length;
}

console.log(avg(arr));