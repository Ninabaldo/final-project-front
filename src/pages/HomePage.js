import "../components/scss/Home.scss"
import homeImage from "../img/home.jpeg"
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";


function HomePage() {
  const history = useHistory()
  
  return (
    
    <>
    <h3>Put somme colors<br></br>
     in your<br></br>
     digital world</h3> 

   <button onClick={()=>{history.push("/login")}}> 
   Login

   </button>

     <img src={homeImage} className="styleimage"/>
  
     <Footer></Footer>     

</>


);
  }

export default HomePage;