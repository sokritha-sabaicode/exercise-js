// Write a function that takes a non negative number as a parameter
// and returns the factorial of that parameter

function factorial(n) {
  
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}
console.log(factorial(0))