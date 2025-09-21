export const fetcher = (path) =>
    fetch(process.env.NEXT_PUBLIC_API_URL + path).then((res) => res.json());
