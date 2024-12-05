import { useQuery } from "react-query";
import { getContacts } from "../api/requests/contacts";

const useFetchContact = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['contacts'],
        queryFn: () => getContacts().then((responce) => responce.data)
    });

    return {
        data,
        isLoading,
        isError,
        error
    }
}

export default useFetchContact;