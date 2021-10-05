import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/scss/signup.scss"

const API_URL = process.env.REACT_APP_API_URL;


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        
      })
  };

  
  return (
    <form onSubmit={handleSignupSubmit}>
    <div class="container" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>Please Sign up</h2>
      <input type="name"value={name} onChange={handleName} placeholder="name"/>
      <input type="email"value={email} onChange={handleEmail} placeholder="email"/>
      <input type="password" value={password} onChange={handlePassword}placeholder="password"/>
      <h2>&nbsp;</h2>
      <button type="submit">Signup</button>
    </div>
  </div>
  </form>
  )
}

export default SignupPage;