// Importar y configurar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAr_Zc0vC3M2TDlafTx-SbBijxD7nEyqvg",
  authDomain: "p1dapptic.firebaseapp.com",
  projectId: "p1dapptic",
  storageBucket: "p1dapptic.firebasestorage.app",
  messagingSenderId: "161404592886",
  appId: "1:161404592886:web:4f28bbf689830e15dd02d7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Referencias a los elementos del DOM
const loginForm = document.getElementById("loginForm");



// Manejar el evento de inicio de sesión
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevenir el envío del formulario

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("¡Ingresó correctamente!");
      window.location.href = "dashboard.html"

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Credenciales Incorrectas!");
  }
});