import "../components/scss/Ranking.scss"
import React, { useEffect, useState , useContext} from 'react';
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import ApiHandler from "../services/ApiHandler.backend "


function Ranking(){
const API_URL = process.env.REACT_APP_API_URL;
const storedToken = localStorage.getItem("authToken");
const [ranking, setRanking] = useState();
const { user,  isLoggedIn } = useContext(AuthContext);


  
    // Declare a new state variable, which we'll call "count"
   
   useEffect(() => {
     axios.get(
        `${API_URL}/ranking`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then ((colors)=>{
       console.log(colors.data)
       setRanking(colors.data)
    
  }
  )

      .catch ((err)=>{
        console.log(err)
    
  }
  )
  }, []);

function favoritos(favourite){
  console.log(favourite)
  const api = new ApiHandler() 
  
  api.addFavourite({...favourite,id:user?._id})
  
  .then((result) =>{
    //res.redirect("/pages/Fav")

  })
  .catch(err => console.log(err));

  }
   
  







    return(


      <>
      <div>
  <h1>The most popular<br></br>
      of Colored Id <br></br> 🫐 🍓 🍌 🥝 🍑 </h1>
     </div>

{ranking?.map(elm =>{
       const color = `#${elm.color.hex}`
  
    return (
      <div className="container1">
    <img src={elm.color.image} alt="text" className="colors1" 
      
    />
    {isLoggedIn ?
     <button onClick={()=>{favoritos(elm)}} 
    class="heart">{elm.rank}♥︎</button>
    :null}
    <div>
    </div>
     </div>
    )
    })}
      <div>
     
    </div>
  </>
  
  )
};

export default Ranking;