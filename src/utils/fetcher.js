export const fetcher = (path) =>
    fetch(process.env.API_URL + path).then((res) => res.json());
