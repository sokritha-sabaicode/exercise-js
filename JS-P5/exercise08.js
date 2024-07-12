// input: countNum(1, 2, 1, 3, 4 , 2, 5, 7, 8);
// output: {1: 2, 2: 2, 3: 1, 4: 1, 5: 1, 7: 1, 8: 1}

function countNum(...nums) {
  return nums.reduce((acc, current) => {
    if (acc[current]) {
      acc[current] += 1;
    } else {
      acc[current] = 1      
    }
    return acc;
  }, {})
}

console.log(countNum(1, 2, 3, 4, 1, 2, 5, 7, 8))