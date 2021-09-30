// service/index.js
import axios from "axios";


class ColorApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.thecolorapi.com'
    });
  }
   //colores simples + hexadecimal del color
  getColor = (color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=1`);
  getHexScheme =(hex)=> this.api.get(`/scheme/?hex=${hex.value}`);
  //Combinaciones de 3 colores + numero hexadecimal de los 3 colores
  getGradientScheme =(color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=3`);
  getHexGradientScheme =(hex)=> this.api.get (`/scheme/?hex=${hex.value}&mode=analogic&count=3`)

}


export default ColorApi;