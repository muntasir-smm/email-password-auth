import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
// Sign Up
const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handelSubmit = (event) => {
    // 1. Prevent page referesh

    event.preventDefault();
    setSuccess("");
    setError("");

    // 2. Collect form data

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // Validate
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please atleast one uppercase");
      return;
    }

    //   Create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has created successfully");
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
        setError(error.message);
      });
  };

  const handelEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handelPasswordBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="w-75 mx-auto">
      <h2>Please Register</h2>
      <form onSubmit={handelSubmit}>
        <input
          className="mb-4 rounded ps-2"
          onSubmit={handelEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          className=" mb-4 rounded ps-2"
          onSubmit={handelPasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input className="btn btn-success" type="submit" value="Register" />
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
