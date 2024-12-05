import { useQuery } from "react-query";
import { getWorks } from "../api/requests/works";

const useFetchWorks = () => {
    const { data: htmlResponse = [], isLoading: isLoadingHtml } = useQuery<Card[]>({
        queryKey: ["html"],
        queryFn: () => getWorks().then((response) => response.data),
    });

    const { data: reactResponse = [], isLoading: isLoadingReact } = useQuery<Card[]>({
        queryKey: ["react"],
        queryFn: () => getWorks().then((response) => response.data),
    });

    return {
        htmlResponse,
        isLoadingHtml,
        reactResponse,
        isLoadingReact,
    };
};

export default useFetchWorks;
