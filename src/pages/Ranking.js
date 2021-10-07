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
      {console.log(ranking)}
      <div>
  <h2 className="ranking">The most popular of Colored Id 
      <br></br> 🫐 🍓 🍌 🥝 🍑 </h2>
     </div>

{ranking?.map(elm =>{
       const color = `#${elm.color.hex}`
  
    return (
     <>
    {elm.rank !== 0? 


      <div className="container1">
    <img src={elm.color.image} alt="text" className="colors2"  
    />
    {isLoggedIn ?
    
     <button onClick={()=>{favoritos(elm)}} 
    class="heart">{elm.rank}♥︎</button>
     :<button class="heart">{elm.rank}♥︎</button>} 
     
    <div>
    </div>
     </div>
   :null}
   </>
    )
    })}
      <div>
     
    </div>
  </>
  
  )
};

export default Ranking;