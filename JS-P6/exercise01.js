const toCapitalize = require("./capitalize");

const mockDatabase = [
  {
    id: 1,
    name: "sok",
  },
  {
    id: 2,
    name: "soa",
  },
  {
    id: 3,
    name: "pisey",
  },
];

// Exercise B
function getUserById(id, cb) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
    if (user) {
      cb(null, user);
    } else {
      cb("not found", null);
    }
  }, 2000);
}

// getUserById(1, (err,data) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log("HII", data);
//   }
// })


// Exercise C
function processData(user, callback) {
  setTimeout(() => {
    const capitalName = toCapitalize(user.name);
    const NewObj = { ...user, name: capitalName }

    callback(NewObj)
  }, 1500)
}


// Exercise D
getUserById(3, (err, user) => {
  if (err) {
    console.log("Err", err)
  } else {
    processData(user, (data) => {
      console.log(data)
    })
  }
})

