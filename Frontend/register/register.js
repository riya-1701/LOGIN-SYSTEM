document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //Validate input
    if (!email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    //Match Password
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://backend-vlay.onrender.com/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        // alert("User Registered Successfully! Please Login!");
        window.location.href = "./continue.html";
      } else {
        alert("Email already registered!");
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("msg").textContent =
        "Server error. Try again after sometime!";
    }
  });
