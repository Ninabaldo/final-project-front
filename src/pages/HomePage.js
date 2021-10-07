import "../components/scss/Home.scss"
import homeImage from "../img/home.jpeg"
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useEffect, useState, useContext } from "react";


function HomePage() {
  const history = useHistory()
  const { user, isLoggedIn } = useContext(AuthContext);
  return (

    <>


      <h3 className="home">Put somme colors<br></br>
        in your<br></br>
        digital world </h3>
      {!isLoggedIn ?
        <button className="homepage" onClick={() => { history.push("/login") }}>
          Login

        </button>
        : null}
      {!isLoggedIn ?
        <button className="homepage1" onClick={() => { history.push("/signup") }}>
          Signup
        </button>
        : null}
      <img src={homeImage} className="styleimage" />

      <Footer></Footer>

    </>


  );
}

export default HomePage;