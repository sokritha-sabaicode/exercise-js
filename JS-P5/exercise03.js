// user { id: 1, name: “Sok”, address: {street: “123 Main St”, city: “PP”}},

const user = { id: 1, name: "Sok", address: { street: "123 Mian St", city: "PP" } }

const { address: { street, city } } = user;

console.log(`${street}, ${city}`)