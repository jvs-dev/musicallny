let accountEmail = document.getElementById("accountEmail")
let accountPassword = document.getElementById("accountPassword")
let loginAccount = document.getElementById("button-login")
let fieldset_password = document.querySelector(".fieldset--password")
let fieldset_email = document.querySelector(".fieldset--email")
let row = document.querySelector(".flex-row--adapt")

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const auth = getAuth();


loginAccount.onclick = function () {
    loginAccount.textContent = "";
    loginAccount.innerHTML = '<div class="button__loadig"><div class="loading__center"></div></div>'

    if (accountEmail.value == false && accountPassword.value == false) {
        row.classList.add('fillinputs')
        loginAccount.textContent = "Login"
    } else {
        let email = accountEmail.value;
        let password = accountPassword.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.location.href = "index.html";
                const user = userCredential.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                fieldset_password.classList.add('loginpassworderror')
                fieldset_email.classList.add('loginemailerror')
                loginAccount.textContent = "Login"
            });
    }
}







