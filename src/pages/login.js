import Headerbelog from "../comp/headerbeflog";
import Footer from "../comp/footer";
import { useState } from "react";
import qs from "qs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const user = { username, password };
    console.log(user);
    fetch("http://localhost:8083/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify(user),
    })
      .then((response) => response.json()) // Assuming the server responds with JSON
      .then((data) => {
        if (data.access_token && data.refresh_token) {
          // Assuming the authentication token is in the 'token' field of the response data
          const authToken = data.access_token;
          const refreshToken = data.refresh_token;
          // Store the authToken in localStorage
          localStorage.setItem("authToken", authToken);
          localStorage.setItem("refToken", refreshToken);
          localStorage.setItem("username", username);
          console.log("Logged in");
          window.location.href = "/home";
        } else {
          // Display an error message on failure
          setErrorMessage("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };
  return (
    <>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Headerbelog />
      <div className="bud">
        <div className="box">
          <form action="">
            <h2 className="myfont">sign in</h2>
            <div className="inputBox">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="#">Forget Password</a>
              <a href="/signup">Signup</a>
            </div>
            <input
              className="myfont"
              type="submit"
              value="login"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
