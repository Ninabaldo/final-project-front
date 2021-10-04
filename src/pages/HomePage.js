import "../components/scss/Home.scss"
import homeImage from "../img/home.jpeg"
//import Footer from "./components/Footer";


function HomePage() {
  return (
    
    <>
    <h2>Put somme colors<br></br>
     in your<br></br>
     digital world</h2> 

    <button  src="/loginPage.js" className="homepage">Login</button>

     <img src={homeImage} className="styleimage"/>
  
          

</>


);
  }

export default HomePage;