import { useGet } from "./useGet";
export const useGetCityMeteo = (city, params) => {
  
  const { data, loading, error } = useGet(`https://weather-api.mathisbarre.com/${city}`, params)

  return {current:data["currentConditions"],nextFiveDays:data["next5DaysConditions"], loading, error }
}