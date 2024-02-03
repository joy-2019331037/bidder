import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "reactstrap";

import { AuthContext } from "../context/Authcontext.js";
import { BASE_URL } from "../utils/config.js";

import logo from "../assets/images/LOGO.png";

import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  console.log(dispatch);
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        navigate("/login");
      } else {
        console.log(result.data);

        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        navigate("/home");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
  return (
    <center>
      <div className="dabba">
        <img src={logo} alt="" />
        <div className="header">
          <label>Sign In</label>
          <div className="ft">
            <i class="ri-facebook-circle-line"></i>
            <i class="ri-twitter-line"></i>
          </div>
        </div>
        <input
          type="email"
          id="email"
          placeholder="Usermail"
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <Button className="button" type="submit" onClick={handleClick}>
          Login
        </Button>

        
      </div>
    </center>
  );
};

export default Login;

/*
<div>
      <Form>
        <FormGroup>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit" onClick={handleClick}>
          Login
        </Button>
      </Form>
    </div>
*/
