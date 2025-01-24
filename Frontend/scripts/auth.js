import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzWSDIatZKihXy2EX58T_-SWUkHNgFbe0",
    authDomain: "mysture-demo-v0.firebaseapp.com",
    databaseURL: "https://mysture-demo-v0-default-rtdb.firebaseio.com",
    projectId: "mysture-demo-v0",
    storageBucket: "mysture-demo-v0.appspot.com",
    messagingSenderId: "929189778221",
    appId: "1:929189778221:web:a7a64adc6d33bf9649f9a4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("signInForm");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "/dashboard";

        })
        .catch((error) => {
            console.error("Error logging in:", error.message);
        });
});

