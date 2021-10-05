import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import "../components/scss/login.scss"



const API_URL = process.env.REACT_APP_API_URL;


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { logInUser } = useContext(AuthContext);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        
        const token = response.data.authToken;
        logInUser(token);
        props.history.push("/");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  return (
    <div class="container" onSubmit={handleLoginSubmit}>
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>Please Login</h2>
      <input type="email" value={email} onChange={handleEmail}placeholder="email"/>
      <input type="password"  value={password} onChange={handlePassword}placeholder="password"/>
      <h2>&nbsp;</h2>
      <button type="submit" classNameç="buttonlogin">Login</button>
    </div>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
  </div>
    
   
    
  )
}

export default LoginPage;