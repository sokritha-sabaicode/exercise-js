const readFile = require("./readFilePromise");
const writeFile = require("./writeFilePromise");

async function executeFile() {
  try {
    const read1 = await readFile('read.txt');
    console.log('read file read.txt: ', read1);

    const write1 = read1 + '\n first';
    await writeFile('write.txt',write1);
    console.log('write file is successful', write1);

    const read2 = await readFile('write.txt');
    console.log('read file erite.txt:', read2);

    const write2 = read2 + '\n second';
    await writeFile('write2.txt', write2);
    console.log('write file is successful', write2);

    const read3 = await readFile('write2.txt');
    console.log('read file erite.txt:', read3);
  }
  catch (error) {
    console.log(error)
  }
}

executeFile();