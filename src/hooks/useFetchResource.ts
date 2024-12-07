import { useQuery } from "react-query";
import { api } from "@/api/instance";


//todo update style for works/contact/skills
//todo update components Contact/Skills write function for map


const useFetchResource = <T>(url: string, category?: string) => {
    const { data, isLoading, isError, error, status } = useQuery<{ data: T; status: string | number}, Error>({
        queryKey: category ? [url, category] : [url],
        queryFn: async () => {
            try {
                const response = await api.get(url);
                return {
                    data: response.data.data,
                    status: response.data.status,
                };
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(
                        error.message || "Error fetching resource",
                    );
                } else {
                    throw new Error("Error unknown");
                }
            }
        },
        onError: (err: Error) => {
            console.error("Error fetching resource:", err);
        },
    });

    return { data, isLoading, isError, error, status };
};

export default useFetchResource;