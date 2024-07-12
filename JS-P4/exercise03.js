const arr = [
  { Name: 'I', Age: '18' },
  { Name: 'you', Age: '19' },
  {Name: 'we', Age: '20'}
]
function findName(arr) {
  return arr.map(person => person.Name)
}
const employeeName = findName(arr);
console.log(employeeName);
