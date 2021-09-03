
import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr'


const useFetchArray = (url) => {
    const { data, error } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading: !error && !data,
        isEmpty: data && data.length === 0,
    };
};

//posts
export const usePosts = () => {
    return useFetchArray("https://jsonplaceholder.typicode.com/posts");
};

export const usePostsByUserId = id => {
    return useFetchArray(id ? `https://jsonplaceholder.typicode.com/posts?userId=${id}` : null)
}
// users
export const useUsers = () => {
    return useFetchArray("https://jsonplaceholder.typicode.com/users");
};

// comments
export const useComments = () => {
    return useFetchArray("https://jsonplaceholder.typicode.com/comments");
};

export const useCommentsByPostId = id => {
    return useFetchArray(id ? `https://jsonplaceholder.typicode.com/comments?postId=${id}` : null)
}
