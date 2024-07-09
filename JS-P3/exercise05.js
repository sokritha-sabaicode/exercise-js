const writeFile =require("./exercise04")
const readFile = require("./exercise03");

console.log('===========Start=============')

// Callback Hell
readFile('./input.txt', (data) => {
  console.log('Read File Input.txt: ', data);
  writeFile('./output1.txt', data + '\nFirst modification', (data) => {
    console.log(`${data}`);
    readFile('./output1.txt', (data) => {
      console.log(`Read File Output1.txt: ${data}`)
      writeFile('./output2.txt',data + '\nSEcond modification', ( data) => {
        console.log(data);
        readFile('./output2.txt', (data) => {
          console.log('Read File Output2.txt: ', data)
        })
      });
    })
  });  
})

console.log('===========End=============')