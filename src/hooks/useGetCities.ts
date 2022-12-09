import { useQuery } from "react-query";

type Data = any;

export const useGetCities = (enabled: boolean = false ,hookParams: any[]) => {
  return useQuery<Data, any>(
    ["data", ...hookParams, { useErrorBoundary: true }],
    () =>
      fetch("http://www.prevision-meteo.ch/services/json/list-cities").then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else throw new Error("Something went wrong");
        }
      )
  );

  //return { data, loading, error };
};
