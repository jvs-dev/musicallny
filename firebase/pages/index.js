let logo = document.querySelector('.header__h1')
let perfilimg = document.getElementById("perfilimg")
let loginbtn = document.querySelector('.button--header')
let menutoggle = document.querySelector('.header__menutoggle')
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const auth = getAuth();
const user = auth.currentUser;
const firebaseConfig = {
  apiKey: "AIzaSyCxiIRFN3E6MIYy9dCQUB8ozrN4n2ihklY",
  authDomain: "musicallny.firebaseapp.com",
  projectId: "musicallny",
  storageBucket: "musicallny.appspot.com",
  messagingSenderId: "374630937528",
  appId: "1:374630937528:web:74d5bbad7930ffd2d6954d"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




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


try {
  const docRef = await addDoc(collection(db, "users"), {
    name: "João",
    email: "shepherdcom12@gmail.com",
    age: 16
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}