import randomColor from "randomcolor";
import Api from "../services/ApiHandler.backend ";
import { useEffect, useState } from "react";
//import "../components/scss/PaleteCombination.scss"

function PaleteCombi(){

  const[schemeArray, setschemeArray]= useState([])

    useEffect(() => {

        const ColorAPI= new Api()
        
            let colors = randomColor({count:5})
           colors = colors.map ((color)=>{
            return color.substring (1)      })
            
            const colorArray = []
            colors.forEach((color)=>{ 
              ColorAPI
            .getGradientScheme(color.toString()) 
            .then((result) => { console.log(result)
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

<div style={{backgroundColor:color,}}  class="colors">
{elm.hex}
    </div>
    
    
)}

})}

</>
)
}

export default PaleteCombi;