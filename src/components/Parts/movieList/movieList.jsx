import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movieList.css";
import PaginationComp from "../PaginationComp";



const MovieList = () => {
  const [movies, setMovies] = useState([]);


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
      <PaginationComp />
    </div>
  );
};

export default MovieList;
