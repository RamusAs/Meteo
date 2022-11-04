import { useGet } from "./useGet";
export const useGetCities = () => {
  const { data, loading, error } = useGet('http://www.prevision-meteo.ch/services/json/list-cities')
  return {data, loading, error }
}