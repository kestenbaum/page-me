import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "@/api/instance";


const useFetchResource = <T>(url: string, category?: string) => {
    const { data, isLoading, isError, error, status } = useQuery<ApiResponse<T>, Error>({
        queryKey: category ? [url, category] : [url],
        queryFn: async ():Promise<ApiResponse<T>> => {
            const response:AxiosResponse<ApiResponse<T>> = await api.get(url);
            return {
                data: response.data.data,
                status: response.data.status,
            };
        },
        onError: (err: Error) => {
            console.error("Error fetching resource:", err);
        },
    });

    return { data, isLoading, isError, error, status };
};

export default useFetchResource;