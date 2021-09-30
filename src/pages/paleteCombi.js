import randomColor from "randomcolor";
import Api from "../services/ApiHandler.backend ";
import { useEffect, useState } from "react";
import "../components/scss/PaleteCombination.scss"

function PaleteCombi(){

  const[schemeArray, setschemeArray]= useState([])

    useEffect(() => {

        const ColorAPI= new Api()
        
            let colors = randomColor({count:10})
           colors = colors.map ((color)=>{
            return color.substring (1)      })
            
            const colorArray = []
            colors.forEach((color)=>{ 
              ColorAPI
            .getGradientScheme(color.toString()) 
            .then((result) => { console.log(result)
                colorArray?.push({image:result.data.image.bare, hex:result.data.seed.hex.clean})
                
                if(colorArray.length === 10 ){
                 //res.send(result)
                 setschemeArray(colorArray)
                 
                } 

            })
            .catch(err => console.log(err));
             
            })           
       
        

    }, [])
return(
<>

{schemeArray?.map(elm =>{
   const color = `#${elm.hex}`
   console.log(elm)
return (
<div>
<img src={elm.image} alt="roto"  className="colors"/>
{elm.hex}
    </div>
    
    
)

})}

</>
)
}

export default PaleteCombi;