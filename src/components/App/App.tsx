import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import type { Movie } from '../../types/movie';
import { getMovies } from '../../services/movieService';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleMoviesSearch = async (query: string) => {
    const movies = await getMovies(query);

    if (!movies.length) {
      toast('No movies found for your request.');
      return;
    }

    setMovies(movies);
  };

  const handleMovieClick = (movie: Movie) => {};

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleMoviesSearch} />
      {movies.length > 0 && (
        <MovieGrid onSelect={handleMovieClick} movies={movies} />
      )}
      <Toaster />
    </div>
  );
}

export default App;
