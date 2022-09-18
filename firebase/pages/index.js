let logo = document.querySelector('.header__h1')
let perfilimg = document.getElementById("perfilimg")
let loginbtn = document.querySelector('.button--header')
let menutoggle = document.querySelector('.header__menutoggle')
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // O usuário está conectado, consulte a documentação para obter uma lista de propriedades disponíveis
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      logo.style.display = "none";
      loginbtn.style.display = "none";
      // ...
    } else {
      // User is signed out
      // ...
      perfilimg.style.display = "none";
      menutoggle.style.display = "none";
    }
  });


if (user !== null) {
    user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
}

