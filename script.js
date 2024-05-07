document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  if (username) {
      displayUserInfo(username);
  } else {
      window.location.href = "login.html";
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