var userLogin = {name: "April", password: "berkeley"};
var newPassword = prompt("Enter password for user April.");
if (newPassword === userLogin.password){
    console.log("Correct password.");
} else {
    console.log("Wrong password.");
}