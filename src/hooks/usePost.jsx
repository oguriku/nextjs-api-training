
import useSWR from "swr"
import { useRouter } from "next/dist/client/router";

import { fetcher } from "src/utils/fetcher"

export const usePost = (id) => {
    const { data, error } = useSWR(id ? `https://jsonplaceholder.typicode.com/posts/${id}`: null, fetcher);

    return {
        data,
        error,
        isLoading: !error && !data,
    };
}
