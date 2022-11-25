import { useQuery } from "react-query"
export const useGetCities = (enabled = false) => {
	const { data, loading, error } = useQuery(
		["data", ...hookParams, { useErrorBoundary: true }],
		() =>
			fetch("http://www.prevision-meteo.ch/services/json/list-cities").then(
				(response) => {
					if (response.ok) {
						return response.json()
					} else throw new Error("Something went wrong")
				}
			)
	)
	return { data, loading, error }
}
