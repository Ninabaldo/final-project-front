import randomColor from "randomcolor";
import Api from "../services/ApiHandler";
import { useEffect, useState } from "react";
import "../components/scss/PaleteColors.scss"

function PaleteSimpleColors(){

  const[schemeArray, setschemeArray]= useState([])

    useEffect(() => {

        const ColorAPI= new Api()
        
            let colors = randomColor({count:5})
           colors = colors.map ((color)=>{
            return color.substring (1)      })
            
            const colorArray = []
            colors.forEach((color)=>{ 
              ColorAPI
            .getColor(color.toString()) 
            .then((result) => { //console.log(result.data.seed.hex.value)
                colorArray?.push({image:result.data.image.bare, hex:result.data.seed.hex.clean})
                
                if(colorArray.length === 5 ){
                 //res.send(result)
                 setschemeArray(colorArray)
                 
                } 

            })
            .catch(err => console.log(err));
             
            })           
       
        

    }, [])
return(
<>

{schemeArray.map(elm =>{
   {const color = `#${elm.hex}`
return (
  <div class="contenedor"> 
<div style={{backgroundColor:color,}}  class="colors" 
 alt="texto">{elm.hex} 
   
    </div>
    
    </div>
)}

})}

</>
)
}

export default PaleteSimpleColors;