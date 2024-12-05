import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "../api/instance";


const useFetchResource = (endpoint: string, queryKey: string, config?: AxiosRequestConfig) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [queryKey],
        queryFn: () => api.get(endpoint, config).then((response) => response.data),
    });

    return { data, isLoading, isError, error };
};

export default useFetchResource;
