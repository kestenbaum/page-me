import { useQuery } from "react-query";
import { api } from "@/api/instance";

//todo create normal object for response return {data and status}
//todo update style for works/contact/skills
//todo update components Contact/Skills write function for map
//todo update interface {maybe change interface to type} adding names

const useFetchResource = <Date>(url: string, category?: string) => {
    const { data, isLoading, isError, error } = useQuery<Date, Error>({
        queryKey: [url, category],
        queryFn: () => api.get(url).then((response) => response.data.data),
        onError: (err) => {
            console.error("Error:", err);
        }
    });

    return { data, isLoading, isError, error };
};

export default useFetchResource;
