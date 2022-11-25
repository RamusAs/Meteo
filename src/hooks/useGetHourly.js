import { useQuery } from "react-query"
export const useGetHourly = (city, date, hookParams) => {
	const { data, loading, error, isSuccess, refetch } = useQuery(
		["data", ...hookParams, { useErrorBoundary: true }],
		() =>
			fetch(`https://weather-api.mathisbarre.com/${city}/${date}`).then(
				(response) => {
					if (response.ok) {
						return response.json()
					} else throw new Error("Something went wrong")
				}
			)
	)
	return {
		data: data && data["hourly"],
		loading,
		error,
		isSuccess,
		refetch,
	}
}
