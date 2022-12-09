import { useQuery } from "react-query";

type Data = {
  hourly: any;
};

export const useGetHourly = (
  city: string,
  date: string,
  hookParams: any[]
) => {
  const { data, isLoading: loading, error, isSuccess, refetch } = useQuery<Data, any>(
    ["data", ...hookParams, { useErrorBoundary: true }],
    () =>
      fetch(`https://weather-api.mathisbarre.com/${city}/${date}`).then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else throw new Error("Something went wrong");
        }
      )
  );

  return {
    data: data?.hourly,
    loading,
    error,
    isSuccess,
    refetch,
  };
};
