import { useQuery } from "react-query";
import { api } from "@/api/instance";


const useFetchResource = <T>(url: string, category?: string) => {
    const { data, isLoading, isError, error } = useQuery<T, Error>({
        queryKey: [url, category],
        queryFn: () => api.get(url).then((response) => response.data.data),
        onError: (err) => {
            console.error("Error:", err);
        }
    });

    return { data, isLoading, isError, error };
};

export default useFetchResource;
