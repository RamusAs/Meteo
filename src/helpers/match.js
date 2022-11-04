import { CITIES } from "../constants";


export const isCity = (city) => {
 return (Object.values(CITIES).some(el => el.name.toLowerCase().trim() === city.toLowerCase().trim()));  
}