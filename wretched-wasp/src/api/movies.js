export const fetchMovies = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAyMmEwYTUyM2NkN2MyMzFjZWQ1MWVkMjYwNTE5MCIsIm5iZiI6MTcxOTI2OTU0Ny43Mzc2MjcsInN1YiI6IjY2NzlmNzRjZmJkM2U4YTU5NzY1MjM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oBmtdL2WcdWnuUqE2DAANJ50p9EIFtp7Pz8kO3_E_qQ'
    const url = 'https://api.themoviedb.org/3/movie/550/';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Autorization': 'Bearer ' + token,
            'api-key': 'e8022a0a523cd7c231ced51ed2605190',
            'Access-Control-Allow-Origin': '*',
        mode: 'no-cors'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
