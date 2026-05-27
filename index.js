import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhUpHm9vEPoQTO2mirGTHcfH0RDaG2uxE",
  authDomain: "school-b0a2e.firebaseapp.com",
  projectId: "school-b0a2e",
  storageBucket: "school-b0a2e.firebasestorage.app",
  messagingSenderId: "9893981457",
  appId: "1:9893981457:web:5e267eef2bacd4884830b0",
  measurementId: "G-R9STDWYD2W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("User Created");
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged In");
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.logout = function () {
  signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  const status = document.getElementById("status");

  if (user) {
    status.innerText = "Logged in as: " + user.email;
  } else {
    status.innerText = "Not logged in";
  }
});









