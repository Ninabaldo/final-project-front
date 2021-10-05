import "../components/scss/fav.scss"
import { useContext } from "react";
import ApiHandler from "../services/ApiHandler.backend "



const { user, isLoggedIn } = useContext(AuthContext);

function Fav(favourite){

 
  
    const api = new ApiHandler() 
    
    api.getFavourite({...favourite,id:user?._id})
    
    .then((result) =>{
      res.jason("/pages/Fav")
  
    })
    .catch(err => console.log(err));
  
    


    return(
  <h1>Hello, this is your profile page, save your favourite colors and combinations here.</h1>

  



    )
};

export default Fav;