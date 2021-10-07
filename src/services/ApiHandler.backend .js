// service/index.js
import axios from "axios";





class ColorApi {
  constructor() {
    const storedToken = localStorage.getItem('authToken');
    this.api = axios.create({
      baseURL: 'http://localhost:5005/api'
    }, { headers: { Authorization: `Bearer ${storedToken}` } });
  }

  getGradientScheme = (color) => this.api.get(`/scheme/${color}`);
  addFavourite = (favourite) => this.api.post(`/add-favourite`, favourite);
  getFavourite = (userId) => this.api.post(`/fav/`, userId);


}


export default ColorApi;