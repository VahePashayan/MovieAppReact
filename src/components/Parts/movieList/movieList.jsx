import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movieList.css";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: theme.spacing(2),
      backgroundColor: "#4d774e",
      display: 'flex',
      justifyContent: 'center',
    },

}));

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    async function getMovies() {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/popular?api_key=30eac0e9eb1c56b557b4c00b711ab117"
      );
      setMovies(result.data.results);
    }
    getMovies();
  });

  return (
    <div>
      <div className="container">
        {movies.map((el) => (
          <div className="movieContainer">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
              alt={el.title}
            />
            <h2>{el.title}</h2>
            <h5>Rating: {el.vote_average}</h5>
          </div>
        ))}
      </div>
      <div className={classes.root}>
        <Pagination count={500} className={classes.pageNum}/>
      </div>
    </div>
  );
};

export default MovieList;
