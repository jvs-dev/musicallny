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
  // O objeto de usuário tem propriedades básicas como nome de exibição, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // O ID do usuário, exclusivo do projeto Firebase. Não use
  // este valor para autenticar com seu servidor backend, se
  // você tem um. Use User.getToken() em vez disso.
  const uid = user.uid;
  perfilimg.src="https://media.istockphoto.com/photos/trendy-girl-singing-favorite-song-out-loud-in-phone-as-mic-wearing-picture-id1256944025?s=612x612"
}

