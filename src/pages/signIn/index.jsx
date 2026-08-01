import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Auth from "../../api/auth";
import "./index.css";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken) {
    return <Navigate to="/" replace />;
  }

  const signInForm = async (event) => {
    event.preventDefault();

    try {
      const data = await Auth(email, password);

      if (data.success) {
        Cookies.set("jwt_token", data.data.token, {
          expires: 7,
        });

        setShowError(false);
        setErrorMessage("");

        navigate("/", { replace: true });
      } else {
        setShowError(true);
        setErrorMessage(data.message || "Login failed");
      }

    } catch (error) {
      setShowError(true);
      setErrorMessage(error.message || "Something went wrong");
    }
  };

  return (
    <div className="signin-container">

      <div className="signin-card">

        <img
          src="/logo.png"
          alt="logo"
          className="logo"
        />

        <h1>Party Menu</h1>

        <p>
          Sign in to explore our delicious menu
        </p>


        <form onSubmit={signInForm}>

          <label htmlFor="inputEmail">
            Email
          </label>

          <input
            id="inputEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />


          <label htmlFor="inputPassword">
            Password
          </label>

          <input
            id="inputPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />


          {showErrorMessage && (
            <p className="error-msg">
              {errorMessage}
            </p>
          )}


          <button type="submit">
            Sign In
          </button>


        </form>

      </div>

    </div>
  );
}

export default SignIn;