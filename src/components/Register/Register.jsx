import React, { useState } from "react";
// Sign Up
const Register = () => {
  const [email, setEmail] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
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
