import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, url, year, genres, id }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="bg-gray-800 border border-gray-700 shadow rounded-lg p-4">
        <img src={url} alt={title} className="w-full h-56 object-cover mb-2" />
        <h2 className="text-base leading-5 font-bold mb-2 text-white">
          {title}
        </h2>
        <p className="text-sm">{year}</p>
        <p className="text-sm">{genres.join(', ')}</p>
        {/* <p className="text-sm">Rate {rating}/5</p>
        <p className="text-sm">{views} views</p> */}
      </div>
    </Link>
  );
};

export default MovieCard;
