import randomColor from "randomcolor";
import Api from "../services/ApiHandler";
import { useEffect, useState } from "react";
import "../components/scss/PaleteColors.scss"

function PaleteSimpleColors(){

  const[schemeArray, setschemeArray]= useState([])

    useEffect(() => {

        const ColorAPI= new Api()
        
            let colors = randomColor({count:20})
           colors = colors.map ((color)=>{
            return color.substring (1)      })
            
            const colorArray = []
            colors.forEach((color)=>{ 
              ColorAPI
            .getColor(color.toString()) 
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
    <div className= "simplecolors">
    
    {schemeArray?.map(elm =>{
       const color = `#${elm.hex}`
       
    return (
    <div>
    <img src={elm.image} alt="text" className="colors" />
    
    <button type="submit" class="heart">♥︎</button>
     
     </div>
    )
    
    })}
    
    </div>
    )
    }

export default PaleteSimpleColors;