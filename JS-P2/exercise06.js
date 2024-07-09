// Write a function that could check if the password provided is strong or not.
// A strong password should have a minimum length of 8 characters
function checkPassword(password) {
  if (password.length >= 8) {
    console.log("password is storng");
  } else {
    console.log("password is not storng");
  }
}
checkPassword("237342736273829");
