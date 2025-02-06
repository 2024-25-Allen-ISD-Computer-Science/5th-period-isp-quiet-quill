import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtWQvR0g7glI6UmARjzbPqbqWor-1RGbI",
    authDomain: "quiet-quill-d2bf0.firebaseapp.com",
    projectId: "quiet-quill-d2bf0",
    storageBucket: "quiet-quill-d2bf0.firebasestorage.app",
    messagingSenderId: "722653771174",
    appId: "1:722653771174:web:d830bad6b8adb07b9e0b67"
};

function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error logging in:", errorCode, errorMessage);
      });
}

  function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User account created successfully:", user);
        })
        .catch((error) => {
            console.error("Error creating user:", error.code, error.message);
        });
}

function logoutUser() {
    signOut(auth)
        .then(() => {
            console.log("User logged out successfully.");
        })
        .catch((error) => {
            console.error("Error logging out:", error.message);
        });
}

function checkAuthStatus() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is logged in:", user);
        } else {
            console.log("No user is logged in.");
        }
    });
}