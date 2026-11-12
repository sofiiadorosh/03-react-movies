import toast, { Toaster } from 'react-hot-toast';
import { getMovies } from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';

function App() {
  const handleMoviesSearch = async (query: string) => {
    const movies = await getMovies(query);
    if (!movies.length) {
      toast('No movies found for your request.');
      return;
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleMoviesSearch} />
      <Toaster />
    </div>
  );
}

export default App;
