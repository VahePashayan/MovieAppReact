import React from 'react';
import MovieList from '../Parts/movieList/MovieList';
import NavBar from '../Parts/NavBar';
import PaginationComp from '../Parts/PaginationComp';


const MainPage = () => {
    return <div>
        <NavBar />
        <MovieList/>
        <PaginationComp/>
    </div>;
}
 
export default MainPage;