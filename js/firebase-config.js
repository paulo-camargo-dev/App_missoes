// Firebase Compat (funciona no GitHub Pages)

// Config do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA6vv58ejDEH8cmh3833VchEd7DIct8ba0",
    authDomain: "appmissoes-21c4f.firebaseapp.com",
    projectId: "appmissoes-21c4f",
    storageBucket: "appmissoes-21c4f.firebasestorage.app",
    messagingSenderId: "97813114592",
    appId: "1:97813114592:web:5d51ae9b0bf9f01058ea85"
};

// Inicializa Firebase (COMPAT)
firebase.initializeApp(firebaseConfig);

// Globais (compat)
const db = firebase.firestore();
const auth = firebase.auth();

