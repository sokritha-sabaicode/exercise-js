const arr = [-1, -3, -13,
  -5, -9, -6];

function maxNum(total, num) {
  console.log(num);
  console.log(total);
  if (num > total) {
    return num;
  } else {
    return total;
  }
}

const maxArr = arr.reduce(maxNum);
console.log(maxArr);