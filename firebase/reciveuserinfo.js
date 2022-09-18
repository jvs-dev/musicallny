import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;


//Para receber informações de perfil de um usuário, use as propriedades de uma instância de User. Exemplo:
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
}





//Para receber as informações de perfil obtidas dos provedores de login vinculados a um usuário, use a propriedade providerData. Exemplo:
if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }






//É possível atualizar as informações básicas do perfil de um usuário, como o nome de exibição e o URL da foto do perfil dele, com o método updateProfile. Exemplo:
updateProfile(auth.currentUser, {
    displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Perfil atualizado!
    // ...
  }).catch((error) => {
    // Um erro ocorreu
    // ...
  });
  