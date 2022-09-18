let accountEmail = document.getElementById("accountEmail")
let accountPassword = document.getElementById("accountPassword")
let createAccount = document.getElementById("button-sigin")
let confirmPassword = document.getElementById("confirmPassword")
let fieldset_email = document.querySelector(".fieldset--email")
let fieldset_password = document.querySelector(".fieldset--password")
let fieldset_confirmpassword = document.querySelector(".fieldset--confirmpassword")
const auth = getAuth();

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

createAccount.onclick = function () {
    createAccount.textContent="";
    createAccount.innerHTML = '<div class="button__loadig"><div class="loading__center"></div></div>'

    let email = accountEmail.value;
    let password = accountPassword.value;
    let confirm = confirmPassword.value

    if ( password == confirm && password.length >= 6) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "index.html";
        })
        .catch((error) => {
            fieldset_email.classList.add('incorrectemail')
            const errorCode = error.code;
            const errorMessage = error.message;
            createAccount.textContent="Sing-in"
        });        
    } 
    if (password.length < 6) {
        fieldset_password.classList.add('minletter');
        createAccount.textContent="Sing-in"
    }
    if (password != confirm) {
        fieldset_confirmpassword.classList.add('incorrectpassword');
        createAccount.textContent="Sing-in"
    }

}
