// Write a function that takes an array of numbers as an input
// and returns the median value
// Write a function that could sort a list of numbers in ascending order.
let number = [100, 5, 98, 6, 7, 3, 8,45,2,3]

function sortNumber(number) {
  
  for (let i = 0; i < number.length; i++){
    for (let j = i + 1; j < number.length; j++){
      if (number[i] > number[j]) {
        let storeNumber = number[i]

        number[i] = number[j]
        number[j] = storeNumber;
      }
    }
  }
  return number;
}
//console.log("sort a list of numbers in ascending order: ", sortNumber(number))

function findMedian(array){
  array = sortNumber(array)
  console.log(array)
  let mid = Math.floor(array.length / 2)
  let median = 0;
  if (array.length % 2 == 0) {
    median=(array[mid-1]+array[mid])/2
  }
  else 
    median = array[mid]
  return median
}
console.log(findMedian([2,5,4,6,7,12,67]))