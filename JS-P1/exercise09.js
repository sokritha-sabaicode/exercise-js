for (let i = 2; i <= 100; i++){
  let isPrime = true;
  // validation 
  for (let j = 2; j <= i - 1; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  // Show Result
  if (isPrime) {
    console.log(`${i} is Prime number!`)
  }
}

 