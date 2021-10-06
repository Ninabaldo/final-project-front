import "../components/scss/fav.scss"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../context/auth.context";
import ApiHandler from "../services/ApiHandler.backend "
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const storedToken = localStorage.getItem("authToken");







function Fav(favourite){
  const[favouriteColors,setFavouriteColors]=useState([])
  const[favouriteSchemes,setFavouriteSchemes]=useState([])
  const colors=[]
  const schemes=[]

  const { user, isLoggedIn } = useContext(AuthContext);
  useEffect(() => { //console.log(user._id)
    const api = new ApiHandler() 
    
    api.getFavourite({id:user?._id})
    
    .then((result) =>{ console.log(result.data)
     result.data.favourites.forEach(element => {
       if (element.image.includes("count=3")){
        schemes.push(element)

       }
       else{
         colors.push(element)
       }
     });
    setFavouriteColors(colors)
    setFavouriteSchemes(schemes)
    
    })
    .catch(err => console.log(err));
  
  }, []);


  // DELETE !!!!!!!!!!
const deleteFav = (colorId, cual) => { console.log("hola")                              
    // Make a DELETE request to delete the color
    axios
      .delete(`${API_URL}/deleteFav/${colorId}`,
      { headers: { Authorization: `Bearer ${storedToken}`} })
      .then((response) => {
       console.log(response)
       if(cual=== "colors"){
       const newColors = favouriteColors.filter(color=>
        color._id !== colorId)
       //console.log(newColors)
       //console.log(favouriteColors)
       setFavouriteColors(newColors)

      }

      if(cual=== "schemes"){
       const newColors = favouriteSchemes.filter(color=>
        color._id !== colorId)
       //console.log(newColors)
       //console.log(favouriteColors)
       setFavouriteSchemes(newColors)
      }

      })
      .catch((err) => console.log(err));
  };


    
  return(
   <>
   <h6>Hey, { user.name} :) <br></br>check out your favourites <br></br> 🌔 🌓 🌒 🌑 🌘 🌗 🌖 🌕</h6>
 

    <div>
   
   <main>

       <div className= "simplecolors">
   
       {favouriteColors?.map(elm =>{
          const color = `#${elm.hex}`
      
       return (
         <div>
         {console.log(elm)}
       <img src={elm.image} alt="text" className="colors" 
         
       />
       <div>
       
       <button onClick={()=>deleteFav(elm._id,"colors")}className="bin" type="submit"> ✖️ </button>
       
       
        </div>
         </div>
       )
       })}
       {favouriteSchemes?.map(elm =>{
          const color = `#${elm.hex}`
      
       return (
         <div>
         {console.log(elm.img)}
       <img src={elm.image} alt="text" className="colors" 
         
       />
       <div>
       
       <button onClick={()=>deleteFav(elm._id,"schemes")}className="bin" type="submit"> ✖️ </button>
       
       
        </div>
         </div>
       )
       })}
       </div>
       </main>
       </div>
       
       </> 
       )
        
       }
   

export default Fav;