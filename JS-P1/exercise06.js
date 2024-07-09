let evenNum = 0;
let oddNum = 0;
for (let i = 1; i <= 10; i++){
  if (i % 2 == 0) {
    evenNum++;
  } else {
    oddNum++;
  }
}
console.log(`Even Number : ${evenNum}`)
console.log("Odd Number  :",oddNum)