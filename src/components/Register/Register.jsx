import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
// Sign Up
const Register = () => {
  const [email, setEmail] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    //   Create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log("ERROR:", error);
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
          onChange={handelEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          className=" mb-4 rounded ps-2"
          onBlur={handelPasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input className="btn btn-success" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
