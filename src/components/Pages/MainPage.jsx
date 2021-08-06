import React from 'react';
import MovieList from '../Parts/movieList/movieList';
import NavBar from '../Parts/navBar';
import PaginationComp from '../Parts/PaginationComp';


const MainPage = () => {
    return <div>
        <NavBar />
        <MovieList/>
        <PaginationComp/>
    </div>;
}
 
export default MainPage;