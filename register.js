import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

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
//const app = initializeApp(firebaseConfig);

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('submit');

  // Asociar el evento click al botón
  submit.addEventListener("click", function(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
      
      //inputs
    const userName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
      const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    // Signed in 
    const user = userCredential.user;
    alert("¡Registro completado correctamente!");
    window.location.href = "login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  });
});
