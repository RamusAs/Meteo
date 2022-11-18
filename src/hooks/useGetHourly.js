import { useGet } from "./useGet"
export const useGetHourly = (city, date, hookParams) => {
	
	const { data, loading, error } = useGet(
		`https://weather-api.mathisbarre.com/${city}/${date}`,
		hookParams
	)

	return {
		data: data["hourly"],
		loading,
		error,
	}
}
