

const firstDate = ['2024-01-01', '2024-02-02', '2024-04-04'];

function formateDate(getFormat) {
  let formate = getFormat.map((date) => {
    let path = date.split("-")
    console.log(path);
    return `${path[2]}/${path[1]}/${path[0]}`

  }
   
  )
  return formate;
}
let anwser = formateDate(firstDate)
console.log(anwser);