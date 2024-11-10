import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, url, year, genres, id }) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link to={`/movies/${id}`}>
      <div 
        ref={cardRef}
        className="bg-gray-800 border border-gray-700 shadow rounded-lg p-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500 hover:bg-gray-700 group"
      >
        <div className="relative overflow-hidden rounded-lg mb-2">
          {isInView && (
            <img 
              src={`http://localhost:8080/${url}`}
              alt={title} 
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
              loading='lazy'
            />
          )}
        </div>
        <h2 className="text-base leading-5 font-bold mb-2 text-white transition-colors duration-500 group-hover:text-yellow-400">
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
