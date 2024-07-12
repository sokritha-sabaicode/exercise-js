
function clearObject(arrObject) {
  return arrObject.filter((element) => {
    return (element.age>18)
  })
}
let arrObject = [
  {
    name: 'angel',
    age:25
  },
  {
    name: 'summer',
    age:29
  }

]
console.log(clearObject(arrObject))