// Input: "George Raymond Richard Martin"
// Output => "GRRM"

const inputs = "George Raymond Richard Martin";

function mergeName(input) {
  const arrayName = input.split(" ");
  console.log(arrayName)
   
  const mapName = arrayName.map(name => { return name[0] });
  console.log(mapName);

  const result = mapName.reduce((acc, current) => acc + current)
  return result;
}

console.log(mergeName(inputs));