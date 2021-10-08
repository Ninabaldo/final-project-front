import "../components/scss/Home.scss"
import homeImage from "../img/home.jpeg"
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";


function HomePage() {
  const history = useHistory()
  const { user, isLoggedIn } = useContext(AuthContext);
  return (

    <>
      {!isLoggedIn ?

        <h3 className="home">Put somme colors<br></br>
          in your<br></br>
          digital world </h3>
        :
        <h3 className="home2"> Hey👋🏽  wellcome, check out our libraries!</h3>}
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
      {!isLoggedIn ?
        <img src={homeImage} className="styleimage" />
        :
        null}
      <Footer></Footer>

    </>


  );
}

export default HomePage;