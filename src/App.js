import './App.css';
import MovieList from './components/movieList/movieList';
import SearchAppBar from './components/navBar';

function App() {
  return ( <div>
  <SearchAppBar />
  <MovieList />
  </div>
  )
}

export default App;
