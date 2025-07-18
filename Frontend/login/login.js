document.getElementById("login").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(`Entered email: ${email} and Entered Pass: ${password}`);

  try {
    const res = await fetch("http://localhost/3000/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      //Save JWT Token to localstorage
      localStorage.setItem("token", data.token);
      alert("Login Succesful");

      //Redirect to dashboard
      window.location.href = "../dashboard/index.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Login Error:", err);
    alert("Error connecting to server");
  }
});
