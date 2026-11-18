import axios from 'axios';
import { type FetchMoviesResponse, type Movie } from '../types/movie';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  const { data } = await tmdb.get<FetchMoviesResponse>('/search/movie', {
    params: { query },
  });

  return data.results;
}
