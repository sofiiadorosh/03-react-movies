import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import type { Movie } from '../../types/movie';
import { getMovies } from '../../services/movieService';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleMoviesSearch = async (query: string) => {
    try {
      setMovies([]);
      setLoading(true);

      const results = await getMovies(query);

      if (!results.length) {
        toast('No movies found for your request.');
        return;
      }

      setMovies(results);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {};

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleMoviesSearch} />
      {movies.length > 0 && (
        <MovieGrid onSelect={handleMovieClick} movies={movies} />
      )}
      {loading && <Loader />}
      <Toaster />
    </div>
  );
}

export default App;
