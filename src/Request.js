
 const api_key =`008146f34a3621b7c990655094e1308f`

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=5`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
}
export default requests
