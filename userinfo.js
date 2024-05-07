const firebaseConfig = {
    apiKey: "AIzaSyBizhqmIMrQUlUvth8gKEDOFAleXxe-z-I",
    authDomain: "workoutapp-d907b.firebaseapp.com",
    projectId: "workoutapp-d907b",
    storageBucket: "workoutapp-d907b.appspot.com",
    messagingSenderId: "537280252444",
    appId: "1:537280252444:web:6881e57f9e601b350eadd9"
  };

  const auth = getAuth();
  const db = getDatabase();


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    if (username) {
        displayUserInfo(username);
    } else {
        const loginButton = document.createElement("button");
        loginButton.textContent = "Login";
        loginButton.addEventListener("click", function() {
            window.location.href = "login.html";
        });
        document.getElementById("userInfo").appendChild(loginButton);
    }
});

function displayUserInfo(username) {
    const userInfo = `
        <p>Welcome, ${username}!</p>
        <p>User information:</p>
        <ul>
            <li>Name: John Doe</li>
            <li>Email: john@example.com</li>
        </ul>
    `;
    document.getElementById("userInfo").innerHTML = userInfo;
}