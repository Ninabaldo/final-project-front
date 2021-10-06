import "../components/scss/Ranking.scss"
import React, { useEffect, useState } from 'react';
import axios from "axios";

function Ranking(){
const API_URL = process.env.REACT_APP_API_URL;
const storedToken = localStorage.getItem("authToken");
const [ranking, setRanking] = useState();

  
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





    return(


      <>
      <div>
  <h1>The most popular<br></br>
      of Colored Id <br></br> 🫐 🍓 🍌 🥝 🍑 </h1>
     </div>

{ranking?.map(elm =>{
       const color = `#${elm.color.hex}`
  
    return (
      <div>
    <img src={elm.color.image} alt="text" className="colors" 
      
    />
    <div>
    {elm.rank}
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