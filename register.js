// Importar y configurar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
const registerForm = document.getElementById("registerForm");

// Manejar el evento de registro
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevenir el envío del formulario

  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validación de correos coincidentes
  if (email !== confirmEmail) {
    alert("Los correos electrónicos no coinciden.");
    return;
    }

  // Validación de formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("El formato del correo electrónico es incorrecto.");
    return;
    }

  // Validación de dominio conocido
  const validDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "edu.mx"];
  const emailDomain = email.split("@")[1];
  if (!validDomains.includes(emailDomain)) {
    alert("El dominio del correo electrónico no es válido o no está reconocido.");
    return;
    }

  // Validación de contraseñas coincidentes
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
    }

  // Si todo está correcto, se puede enviar el formulario
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("¡Registro completado correctamente!");
    window.location.href = "login.html"
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Tenemos un Error");
  }
});