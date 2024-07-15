function toCapitalize(word) {
  let capitalWord = word[0].toLocaleUpperCase()
  for (let i = 1; i < word.length; i++) {
    capitalWord += word[i]
  }
  return capitalWord
}

module.exports = toCapitalize