import "../components/scss/fav.scss"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../context/auth.context";
import ApiHandler from "../services/ApiHandler.backend "






function Fav(favourite){
  const[favourites,setFavourites]=useState()
  const { user, isLoggedIn } = useContext(AuthContext);
  useEffect(() => { //console.log(user._id)
    const api = new ApiHandler() 
    
    api.getFavourite({id:user?._id})
    
    .then((result) =>{ //console.log(result)
     
    setFavourites(result.data.favourites)
    })
    .catch(err => console.log(err));
  
  }, []);
    
  return(

   

    <div className="picker">
     <input type="color" defaultValue="#ED6371"/>
     
     
   
   
       <div className= "simplecolors">
   
       {favourites.map(elm =>{
          const color = `#${elm.hex}`
          
       return (
         <div>
       <img src={elm.image} alt="text" className="colors" 
         
       />
       {isLoggedIn?
       <button onClick={()=>{favourite(elm)}} 
       class="heart">♥︎</button>
        :null}
        </div>
       )
       })}
       
       </div>
       </div>)
       }
   
   

export default Fav;