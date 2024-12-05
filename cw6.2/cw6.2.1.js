let text = document.getElementById("ptext");
let button = document.getElementById("jsstyle");
button.addEventListener("click",()=>{
    text.innerHTML = "maktab 124 week 6"
    text.style.fontSize = "20px";
    text.style.color = "red";
    text.style.fontFamily = "Arial";
})

    // -------------------2-----------------------
const button = document.getElementById('submit-button');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
event.preventDefault();
const userObject = {
firstName : firstName.value,
lastName : lastName.value,
email : email.value,
password : password.value,
}
console.log(userObject)
})
