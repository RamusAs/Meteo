import { useGet } from "./useGet"
export const useGetCityMeteo = (city, params, enabled = false) => {
	const { data, loading, error, refetch, isSuccess } = useGet(
		`https://weather-api.mathisbarre.com/${city}`,
		params,
		enabled
	)

	return {
		current: data && data["currentConditions"],
		nextFiveDays: data && data["next5DaysConditions"],
		loading,
		error,
		refetch,
		isSuccess,
	}
}
