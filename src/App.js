import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import data from "./fakeData/movies.json";

import AddMovie from "./components/AddMovie";
function App() {
  const [movies, setMovies] = useState(data);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(50);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    title:"",
    description:"",
    posterURL:"",
    rating:0,
  })

  const addMovie = ()=>{
   setMovies([...movies,newMovie])
  }

  useEffect(() => {
    const filtredMovie = data
      .filter((movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase())
      )
      .filter((movie) => movie.rating <= filterRating);
    setMovies(filtredMovie);

    return () => {
      setMovies(filtredMovie);
    };
  }, [filterTitle, filterRating]);

  return (
    <div>

      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <h1>My Favorite Movies</h1>

      <div className="btn-add-movie">
        <AddMovie handleShow={handleShow} show={show} handleClose={handleClose} setNewMovie={setNewMovie} newMovie={newMovie} addMovie={addMovie}/>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
