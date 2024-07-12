const products = [
  {
    name: "banana", category: "Fruite"
  },
  {
    name: "aplle", category: "Vegetable"
  },
  {
    name: "orang", category: "Fruite"
  },
  {
    name: "dkdkd", category: "Vegetable"
  },
];
// { Fruite: [ 'banana', 'orang' ], Vegetable: [ 'aplle', 'dkdkd' ] }

const result = products.reduce((acc, current) => {
  const category = current.category;

  if (!acc[category]) {
    acc[category] = [];
  } 
  
  // acc[category] = []
  acc[category].push(current.name);
  return acc;
}, {})

console.log(result)