import randomColor from "randomcolor";
import Api from "../services/ApiHandler";
import { useEffect, useState, useContext} from "react";
import "../components/scss/PaleteColors.scss"
import ApiHandler from "../services/ApiHandler.backend "
import { AuthContext } from "./../context/auth.context";
import { returnStatement } from "@babel/types";











function PaleteCombi(){

  const[schemeArray, setschemeArray]= useState([])
  const { user, isLoggedIn } = useContext(AuthContext);
  

  function favoritos(favourite){
  
  const api = new ApiHandler() 
  
  api.addFavourite({...favourite,id:user?._id})
  
  .then((result) =>{

  })
  .catch(err => console.log(err));

  }


    useEffect(() => {

        const ColorAPI= new Api()
        
            let colors = randomColor({count:20})
           colors = colors.map ((color)=>{
            return color.substring (1)      })
            
            const colorArray = []
            colors.forEach((color)=>{ 
              ColorAPI
            .getGradientScheme(color.toString()) 
            .then((result) => { //console.log(result.data.seed.hex.value)
                colorArray?.push({image:result.data.image.bare, hex:result.data.seed.hex.clean})
                
                if(colorArray.length === 20 ){
                 //res.send(result)
                 setschemeArray(colorArray)
                 
                } 

            })


        
            .catch(err => console.log(err));
             
            })           
       
        
 




    }, [])

    

  return(

   

 <div className="picker">
  <input type="color" defaultValue="#ED6371"/>
  
  


    <div className= "simplecolors">

    {schemeArray?.map(elm =>{
       const color = `#${elm.hex}`
       
    return (
      <div>
    <img src={elm.image} alt="text" className="colors" 
      
    />
    {isLoggedIn?
    <button onClick={()=>{favoritos(elm)}} 
    class="heart">♥︎</button>
     :null}
     </div>
    )
    })}
    
    </div>
    </div>)
    }


    
export default PaleteCombi;