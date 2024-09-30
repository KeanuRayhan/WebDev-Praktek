import Header from '../components/Header';
import SidebarHome from '../components/SidebarHome';
import Carousel from '../components/Carousel';
import DropdownFilter from '../components/DropdownFilter';
import DramaCard from '../components/MovieCard';
import MovieCard from '../components/MovieCard';
import MovieDataService from "../services/movie.service";
import React, { useState, useEffect } from "react";

const Home = () => {
  // const dramas = [
  //   {
  //     title: 'Title of the drama 1 that makes two lines',
  //     year: 2024,
  //     genres: ['Genre 1', 'Genre 2', 'Genre 3'],
  //     rating: 3.5,
  //     views: 19,
  //   },
  //   // Repeat drama objects as needed
  // ];

  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMovies();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then(response => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMovies();
    setCurrentMovie(null);
    setCurrentIndex(-1);
  };

  const setActiveMovie = (movie, index) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    MovieDataService.findByTitle(searchTitle)
      .then(response => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="flex">
        <SidebarHome />
        <main className="flex-1 p-8">
          <Carousel />
          <h1 className="text-2xl font-bold mb-4 text-white">List Film</h1>
          <DropdownFilter />
          <div className="grid grid-cols-5 gap-4">
            {movies && movies.map((movie, index) => (
              <MovieCard 
                key={index}
                title={movie.title}
                url={movie.url_photo}
                year={movie.year}
                genres={movie.Genres.map(genre => genre.genre)}
                onClick={() => setActiveMovie(movie, index)} 
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
