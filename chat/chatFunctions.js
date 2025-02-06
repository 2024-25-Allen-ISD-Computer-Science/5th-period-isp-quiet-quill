const firebaseConfig = {
    apiKey: "AIzaSyDtWQvR0g7glI6UmARjzbPqbqWor-1RGbI",
    authDomain: "quiet-quill-d2bf0.firebaseapp.com",
    projectId: "quiet-quill-d2bf0",
    storageBucket: "quiet-quill-d2bf0.firebasestorage.app",
    messagingSenderId: "722653771174",
    appId: "1:722653771174:web:d830bad6b8adb07b9e0b67"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const chatRef = database.ref('chat');

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const newMessageRef = chatRef.push();
        newMessageRef.set({
            message: message,
        });

        messageInput.value = '';
    }
}

function getMessages() {
    const chatWindow = document.getElementById('chat-window');

    chatRef.on('child_added', (snapshot) => {
        const messageData = snapshot.val();
        const messageElement = document.createElement('div');
        chatWindow.appendChild(messageElement);

        chatWindow.scrollTop = chatWindow.scrollHeight;
    });
}

window.onload = function() {
    fillChat();
};