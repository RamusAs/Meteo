import { useQuery } from "react-query"

type Data = {
  currentConditions: any
  next5DaysConditions: any
}

export const useGetCityMeteo = (
  city: string,
  params: any[],
  enabled: boolean = false
) => {
  const { data, isLoading: loading, error, refetch, isSuccess } = useQuery<Data, any>(
    ["data", ...params, { useErrorBoundary: true }],
    () =>
      fetch(`https://weather-api.mathisbarre.com/${city}`).then((response) => {
        if (response.ok) {
          return response.json()
        } else throw new Error("Something went wrong")
      })
  )

  return {
    current: data?.currentConditions,
    nextFiveDays: data?.next5DaysConditions,
    loading,
    error,
    refetch,
    isSuccess,
  }
}
