// console.log(sumAll(1, 2)) // 3
// console.log(sumAll(1, 2, 3, 4, 5)) // 15

function sumAll(...getNumber) {
  let total = 0;
  for (let item of getNumber) {
    total +=item
  }
  return total
}

function sumAll1(...getNumber) {
  return getNumber.reduce((acc, current) => acc + current);
}

console.log(sumAll1(1, 2)) // 3
console.log(sumAll1(1, -2, 3, 4, 5)) // 15
