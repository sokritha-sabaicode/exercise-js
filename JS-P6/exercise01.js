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

function getUserById(id, cb) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
   
    if (user) {
      cb(null,user);
    } else {
      cb("not found",null);
    }
  }, 2000);
}

// getUserById(1, (err,data) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log(data);
//   }
// })

function processData(userObj,callback) {
  setTimeout(() => {
    let Name = userObj.name[0].toLocaleUpperCase()
    for (let i = 1; i < userObj.name.length; i++){
      Name += userObj.name[i]
    }
    const NewObj = { ...userObj, name: Name }
    callback(NewObj)
  },1500)
}

processData(mockDatabase[2], (user) => {
  console.log(user)
})