export const Endpoints = {
  NetflixOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_networks=213`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-Uk&page=1`,
  Fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=14`,
  Action: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=28`,
  Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=35`,
  Anime: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&with_genres=16`,
};
