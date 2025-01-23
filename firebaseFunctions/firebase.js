
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtWQvR0g7glI6UmARjzbPqbqWor-1RGbI",
    authDomain: "quiet-quill-d2bf0.firebaseapp.com",
    projectId: "quiet-quill-d2bf0",
    storageBucket: "quiet-quill-d2bf0.firebasestorage.app",
    messagingSenderId: "722653771174",
    appId: "1:722653771174:web:d830bad6b8adb07b9e0b67"
};

const random_uuid = uuidv4();

// Print the UUID
console.log(random_uuid);

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();


import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"

const db = getDatabase();

function InsertData(title, userID, body) {
    set(ref(db, "essays/" + uuidv4()), {
        Title: title,
        UserID: userID,
        Body: body
    })
    .then(()=> {
        alert("data stored successfully")
    })
    .catch((error) => {
        alert("unsuccessful, error"+error)
    })
}

function getData(id) {
    const dbref = ref(db);

    get(child(dbref, "essays/" + id)).then((snapshot) => {
        if(snapshot.exist()) {
            return snapshot.val()
        }
    })
    .catch((error) => {
        alert("unsuccessful, error"+error)
    })
}

function UpdateData(id, title, userID, body) {
    update(ref(db, "essays/" + id), {
        Title: title,
        UserID: userID,
        Body: body
    })
    .then(()=> {
        alert("data stored successfully")
    })
    .catch((error) => {
        alert("unsuccessful, error"+error)
    })
}

function removeData(id, title, userID, body) {
    remove(ref(db, "essays/" + id))
    .then(()=> {
        alert("data deleted successfully")
    })
    .catch((error) => {
        alert("unsuccessful, error"+error)
    })
}

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
  
  document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password);
  });



