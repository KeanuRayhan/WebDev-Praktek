import React, { useEffect, useState } from "react";
import ListDrama from "../components/ListDrama"
import Header from "../components/Header";
import SidebarHome from "../components/SidebarHome";
import MovieDataService from "../services/movie.service";
import { useLocation } from "react-router-dom";
import DropdownFilter from "../components/DropdownFilter";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Searchpage() {
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("query");

  useEffect(() => {
    if (searchQuery) {
      findByQuery(searchQuery);
    }
  }, [searchQuery]);

  const findByQuery = (searchTerm) => {
    MovieDataService.findByQuery(searchTerm)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Sidebar & Main Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SidebarHome />

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Filters and Sorting */}
          <DropdownFilter />
          <h2>
            Search Results for "{searchQuery}"
          </h2>
          {/* List Drama */}
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <ListDrama 
                key={index}
                title={movie.title}
                url={movie.url_photo}
                year={movie.year}
                genres={movie.Genres.map(genre => genre.genre)}
                actors={movie.Actors.map(actor => actor.actor_name)}
                id={movie.movie_id}
              />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Searchpage;
