import "../components/scss/fav.scss"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../context/auth.context";
import ApiHandler from "../services/ApiHandler.backend "
import BasicGrid from "../components/BasicGrid";








function Fav(favourite){
  const[favourites,setFavourites]=useState()
  const { user, isLoggedIn } = useContext(AuthContext);
  useEffect(() => { //console.log(user._id)
    const api = new ApiHandler() 
    
    api.getFavourite({id:user?._id})
    
    .then((result) =>{ console.log(result.data)
     
    setFavourites(result.data.favourites)
    })
    .catch(err => console.log(err));
  
  }, []);
    
  return(
   <>
   <h6>Hey, {user.name} :) <br></br>check out your favourites <br></br> 🌔 🌓 🌒 🌑 🌘 🌗 🌖 🌕</h6>
 <BasicGrid/>

    <div className="picker">
     <input type="color" defaultValue="#ED6371"/>
   
   

       <div className= "simplecolors">
   
       {favourites?.map(elm =>{
          const color = `#${elm.hex}`
      
       return (
         <div>
         {console.log(elm.img)}
       <img src={elm.image} alt="text" className="colors" 
         
       />
       
        </div>
       )
       })}
       </div>
       </div>
       
       </> 
       )
        
       }
   

export default Fav;