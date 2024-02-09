import React, { useRef, useState, useEffect } from "react";
import Header from "../Header/Header";
import Middle from "../Context/Middle";
import "./LogIn.css";

export default function SigninForm() {


  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [podcasts, setPodcasts] = useState([]);


  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Here, you can implement the logic to handle the sign-in process.
    // For this example, we'll just log the email and password to the console.
    console.log("Email:", email);
    console.log("Password:", password);
    // Clear the form fields after handling the form submission.
    emailRef.current.value = "";
    passwordRef.current.value = "";
    // For this example, we'll just set isSignedIn to true to simulate a successful sign-in.
    setIsSignedIn(true);
    // Display a success message to the user (You can replace this with your desired feedback mechanism).
    setMessage("Sign-in successful!");
  };
  if (isSignedIn) {
    // Render the podcast app if the user is signed in
    return (
      <div className="body">
        <Header />
        <br/>
        <Middle />
      </div>
    );
  }
  return (
    <div className="signin-form-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
