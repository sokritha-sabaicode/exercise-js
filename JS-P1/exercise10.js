const arr = [-1, -3, -4, -45, -66, -55, -44, -77, -33]
let max = arr[0];

for (let i = 0; i < arr.length; i++){
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);