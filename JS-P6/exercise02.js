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

// function getAllUsers() {
//   return new Promise((reslove) => {
//     setTimeout(() => {
//       reslove(mockDatabase);
//     }, 2000)
//   })
// }

// function getUserById(id) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       const user = mockDatabase.find((user) => user.id === id);
//       if (user) {
//         reslove(user);
//       } else {
//         reject("not found");
//       }
//     }, 2000);
//   })
// }

// function processData(user) {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       const capitalName = toCapitalize(user.name);
//       const NewObj = { ...user, name: capitalName }

//       if (NewObj) {
//         resole(NewObj);
//       }
//       else {
//         reject("Error!")
//       }
//     }, 1500)
//   })
// }

// function createNewUser(newUser) {
//   return new Promise((resolve, reject) => {
//     const lastId = mockDatabase[mockDatabase.length - 1].id;
//     const newId = lastId + 1;

//     setTimeout(() => {
//       mockDatabase.push({ id: newId, ...newUser })
//       resolve('Save successfully.')
//     }, 2000)
//   })
// }

function updateById(id, newUpdateRecord) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = mockDatabase.findIndex((getID) => getID.id === id)
      if (userIndex != -1) {
        mockDatabase[userIndex] = { id, ...newUpdateRecord };

        // return user updated data
        resolve(mockDatabase[userIndex]);
      }
      reject('id not find');
    }, 1000)
  })
}

// Delete User By Id
function deleteById(id) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let indexForDelete = mockDatabase.findIndex(data => data.id == id)
      if (indexForDelete != -1) {
        mockDatabase.splice(indexForDelete, 1)
        resolve(mockDatabase)
        
      }
      else
        reject('ID not found')
    },1000)
  })
}

// Create New User
// createNewUser({ name: 'sok' })
//   .then(res => { return getAllUsers() })
//   .then(data => { console.log('All User Data: ', data) })
//   .catch(err => console.log(err))

// Get By Id & Process Data
// getUserById(5)
//   .then((user) => {
//     console.log(user);
//     return processData(user);
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// Get All Users
// getAllUsers().then((data) => {
//   console.log(data)
// })

updateById(3, { name: "nyy", age: 10 })
  .then(data => {
    console.log('user updated: ', data)
    console.log(mockDatabase);
  })
  .catch(error => {
    console.error('err', error);
  })

//delete
deleteById(2).then((data) => {
  console.log(data)
})
.catch((err) => {
    console.log(err)
})



