// Write a function that count vowels of a string
// that provided as an input and return the count of vowels(a, e, i, o, u)
function countVowels(str) {
  str = str.toLowerCase()
  const vowels = "aeiou";
  let numbersVowels = 0;
  for (let char of str){
    if (vowels.includes(char)) {
      numbersVowels++
    }
  }
  return numbersVowels
}
let inputString = "Hello world"

// console.log(countVowels(inputString))

// Hello world => 3 (Problem)
// Step: 1 - Get Each Char From the Sentence
// Step: 2 - Compare each char to vowel (a, e, i, o, u)
function countVowels1(sentence) {
  const lowercase = sentence.toLowerCase();
  let count = 0;
  for (let i = 0; i < sentence.length; i++){
    if (lowercase[i] === 'a' || lowercase[i] === 'e' || lowercase[i] === 'i' || lowercase[i] === 'o' || lowercase[i] === 'u') {
      count = count + 1;
    }
  }
  return count;
}

console.log(countVowels1("hEllo world"));


