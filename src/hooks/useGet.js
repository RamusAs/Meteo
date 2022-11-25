import { useEffect, useState } from "react"
import { useQuery } from "react-query"

export const useGet = (url, Componentparams) => {
	const [res, setRes] = useState([])

	const {
		isLoading: loading,
		error,
		data,
		refetch,
		isSuccess,
	} = useQuery(["data", ...Componentparams, { useErrorBoundary: true }], () =>
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json()
			} else throw new Error("Something went wrong")
		})
	)

	useEffect(() => {
		if (!loading) setRes(data)
	}, [loading])

	return { data: res, loading, error, refetch, isSuccess }
}
