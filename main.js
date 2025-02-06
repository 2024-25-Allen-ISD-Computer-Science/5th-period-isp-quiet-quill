const firebaseConfig = {
    apiKey: "AIzaSyDtWQvR0g7glI6UmARjzbPqbqWor-1RGbI",
    authDomain: "quiet-quill-d2bf0.firebaseapp.com",
    projectId: "quiet-quill-d2bf0",
    storageBucket: "quiet-quill-d2bf0.firebasestorage.app",
    messagingSenderId: "722653771174",
    appId: "1:722653771174:web:d830bad6b8adb07b9e0b67"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

window.main = {
    handleSignup: function(email) {
        console.log("Email received:", email);
    }
};