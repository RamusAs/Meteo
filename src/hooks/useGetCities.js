import { useGet } from "./useGet"
export const useGetCities = (enabled = false) => {
	const { data, loading, error } = useGet(
		"http://www.prevision-meteo.ch/services/json/list-cities",
		{ enabled: enabled }
	)
	return { data, loading, error }
}
