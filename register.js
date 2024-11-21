// Configuración de Firebase
const firebaseConfig = {
apiKey: "AIzaSyD1G-...",
authDomain: "ddapptic.firebaseapp.com",
projectId: "ddapptic",
storageBucket: "ddapptic.appspot.com",
messagingSenderId: "104923167292387679742",
appId: "1:104923167292387679742:web:...",
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

//inputs
const userName = document.getElementById('fullname').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;

//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click",function(){
  event.preventDefault()
  alert(5)
})

// Configuración para Google Sign-In
const provider = new firebase.GoogleAuthProvider();

// Evento de inicio de sesión con Google
document.getElementById('googleSignIn').addEventListener('click', async () => {
  try {
    const result = await firebase.signInWithPopup(auth, provider);
    const user = result.user;

    // Mostrar información del usuario
    alert(`Bienvenido ${user.displayName}!`);

    // Opcional: Almacenar usuario en tu base de datos Firestore
    // const db = firebase.firestore();
    // await db.collection('users').doc(user.uid).set({
    //   name: user.displayName,
    //   email: user.email,
    //   createdAt: new Date()
    // });

      } catch (error) {
        console.error(error);
        alert("Error al iniciar sesión: " + error.message);
      }
    });