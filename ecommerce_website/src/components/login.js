import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setData } from "../Redux/Action";
const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // Added state for email
  const [password, setPassword] = useState(""); // Added state for password
  const [showOptions, setShowOptions] = useState(false);
  const [validationError, setvalidationError] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [inputValue, setInputValue] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");

    {
      const userPassword = password;
      const loginCredential = {
        Email: "rajatrawat@gmail.com",
        Mobile: "8958085912",
        Password: "Test@123",
      };

      if (
        (!showPassword && email === loginCredential.Email) ||
        (!showPassword && email === loginCredential.Mobile)
      ) {
        setShowPassword(true);
        setError("");
        setErrorDescription("");
      } else if (!showPassword && email === "") {
        setError("");
        setvalidationError("Enter your email or mobile phone number");
      } else if (
        !showPassword &&
        !inputValue &&
        email !== loginCredential.Email
      ) {
        setvalidationError("");
        setError("There was a problem");
        setErrorDescription("We cannot find account with that email address");
      } else if (
        !showPassword &&
        inputValue &&
        email !== loginCredential.Mobile
      ) {
        setvalidationError("");
        setError("Incorrect phone number"); // Reset validationError when numbers are entered
        setErrorDescription("We cannot find account with that mobile number");
      }

      if (showPassword && password === loginCredential.Password) {
        navigate("/home");
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            dispatch(setData(json)); // Dispatch action with fetched data
            console.log("Data dispatched:", json);
          });
      } else if (showPassword && password === "") {
        setvalidationError("Enter your password");
        setError("");
      } else if (showPassword && password !== loginCredential.Password) {
        setvalidationError("");
        setError("There was a problem");
        setErrorDescription("Your password is incorrect");
      }
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value; // Reset showPassword when input changes
    const password = event.target.value;
    setError(""); // Reset error message

    const numberRegex = /^[0-9]+$/; // Regular expression to check for numbers
    const alphabetRegex = /^[A-Za-z0-9!@#$%^&*(),.,com]+$/; // Regular expression to check for alphabets

    if (!showPassword && numberRegex.test(inputValue)) {
      setInputValue(true);
      setvalidationError("");
    } else if (!showPassword && alphabetRegex.test(inputValue)) {
      setInputValue(false);
      setvalidationError("");
    }

    setEmail(inputValue); // Update email state with input value
    if (showPassword) {
      setPassword(password);
      setvalidationError("");
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const getToEmailPage = () => {
    setShowPassword(!showPassword);
    setError("");
    setErrorDescription("");
    setvalidationError("");
  };

  return (
    <div className="container">
      <div className="row">
        <img
          className="logoImage"
          src="https://press.aboutamazon.in/static-files/08881e65-bd44-4aac-9f7e-c985bb8f1322"
          alt="Your Image"
          style={{ width: "200px", height: "100px" }}
        />
        {error ? (
          <div
            className="error-message"
            style={{ width: "400px", height: "fit-content" }}
          >
            <img
              className="mt-2"
              src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png"
              style={{ height: "5vh" }}
            />
            <div>
              <p
                className="error mt-2"
                style={{ color: "brown", fontWeight: "400" }}
              >
                {error}
              </p>
              <p className="errorText">{errorDescription}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div
          className="loginContainer"
          style={{ width: "400px", height: "fit-content" }}
        >
          <div>
            <form onSubmit={handleLogin}>
              <div className="">
                <h3 className="mt-2">Sign in</h3>
                {showPassword ? (
                  <div>
                    <div className="passwordTextContainer">
                      <label htmlFor="password" className="form-label m-0">
                        Password
                      </label>
                      <span
                        className="forgotPasswordText"
                        onClick={getToEmailPage}
                      >
                        Forgot password
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                    {validationError ? (
                      <div className="validationMessageContainer">
                        <img
                          className="emptyErrorImage"
                          src="https://img.freepik.com/premium-vector/exclamation-point-symbol-attention-mark-vector-illustration-danger-icon-design_87543-10260.jpg?size=626&ext=jpg&ga=GA1.1.343110952.1669712388&semt=ais"
                        />
                        <p
                          className="emptyInputError"
                          style={{ color: "brown", fontSize: "12px" }}
                        >
                          {validationError}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <button type="submit" className="btn btn-warning">
                      {showPassword ? "Sign in" : "Continue"}
                    </button>
                    <input
                      className="mt-4"
                      type="checkbox"
                      id="myCheckbox"
                      name="myCheckbox"
                      value="isChecked"
                    />
                    <label className="checkboxtext" for="myCheckbox">
                      Keep me signed in.
                    </label>
                    <span className="helpDesk">Details</span>
                  </div>
                ) : (
                  <div className="">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Enter mobile phone number or email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    {validationError ? (
                      <div className="validationMessageContainer">
                        <img
                          className="emptyErrorImage"
                          src="https://img.freepik.com/premium-vector/exclamation-point-symbol-attention-mark-vector-illustration-danger-icon-design_87543-10260.jpg?size=626&ext=jpg&ga=GA1.1.343110952.1669712388&semt=ais"
                        />
                        <p
                          className="emptyInputError"
                          style={{ color: "brown", fontSize: "12px" }}
                        >
                          {validationError}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <button type="submit" className="btn btn-warning">
                      {showPassword ? "Sign in" : "Continue"}
                    </button>
                    <p className="termstext">
                      By continuing, you agree to Amazon's Conditions of Use and
                      Privacy Notice.
                    </p>
                    <div>
                      <p className="helpDesk" onClick={toggleOptions}>
                        Need help?
                      </p>
                      {showOptions && (
                        <div>
                          <p className="helpDesk">Forget Password</p>
                          <p className="helpDesk">Other Issues with Sign Up</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
