import { useGet } from "./useGet"
export const useGetCityMeteo = (city, params, enabled = false) => {
	const { data, loading, error, refetch } = useGet(
		`https://weather-api.mathisbarre.com/${city}`,
		params,
		enabled
	)

	return {
		current: data["currentConditions"],
		nextFiveDays: data["next5DaysConditions"],
		loading,
		error,
		refetch,
	}
}
