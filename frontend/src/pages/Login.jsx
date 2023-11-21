import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "reactstrap";

import { AuthContext } from "../context/Authcontext.js";
import { BASE_URL } from "../utils/config.js";

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
        navigate("/main");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
  return (
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
  );
};

export default Login;
