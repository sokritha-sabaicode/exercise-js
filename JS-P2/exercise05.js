// Write a function that could take a parameter
// that is an array of objects representing products
// with `name`, `price` and `quantity` property
// and filter out products with a quantity of zero

const products = [
  {
    name: "Coca-Cola",
    price: 1,
    quantity: 12
  },
  {
    name: "Angkor-Milk",
    price: 2,
    quantity: 0
  },
  {
    name: "Latasoy",
    price: 0.75,
    quantity: 0
  },
  {
    name: "Fanta",
    price: 1.5,
    quantity: 28
  },
  {
    name: "Vigor",
    price: 1.2,
    quantity: 0
  }
]

// Option 1
function filterProducts(products) {
  let filterOut = []
  for (let i = 0; i < products.length; i++){
    if (products[i].quantity > 0) {
      filterOut.push(products[i])
    }
  }
}
// filterProducts(products)

// Option 2:
const filterProducts2 = products.filter(item => item.quantity > 0);
console.log(filterProducts2)