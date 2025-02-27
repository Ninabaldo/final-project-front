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
    <form onSubmit={handleLoginSubmit}>
    <div className="container" >
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="center">
      <h2>Please Login</h2>
      <input type="email" value={email} onChange={handleEmail}placeholder="Email"/>
      <input type="password"  value={password} onChange={handlePassword}placeholder="Password"/>
      <h2>&nbsp;</h2>
      <button type="submit" className="buttonlogin"> Login </button>
    </div>
   
    {errorMessage && <p className="error-message">{errorMessage}</p>}
  </div>
    
    </form>
   
    
  )
}

export default LoginPage;