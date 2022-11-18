import { useEffect, useState } from "react"
import { useQuery } from "react-query"

export const useGet = (url, Componentparams) => {
	const [res, setRes] = useState([])

	const {
		isLoading: loading,
		error,
		data,
		refetch,
	} = useQuery(["data", ...Componentparams, { useErrorBoundary: true }], () =>
		fetch(url).then((res) => res.json())
	)

	useEffect(() => {
		if (!loading) setRes(data)
	}, [loading])

	return { data: res, loading, error, refetch }
}
