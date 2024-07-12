// Write a function that takes an object and a list of property names to filter out. 
//Return a new object that contains all the properties of the original object except those specified in the list
// Example: object = {a:1, b:2, c:3, d:4}
//                    filterProps(object, “b”, “d”) // Should Return:  {a:1, c:3}


const object = {a:1, b:2, c:3, d:4}

function filterProps(object, ...props) {// pros = ["b","d"]
  const newObj = {}
  // Step 1: Loop to find key
  for (let key in object) {//key = a
    // Step 2: 
    if (!props.includes(key)) {
      newObj[key] = object[key]
    }
  }
  return newObj;
}
console.log(filterProps(object,"b","d"))