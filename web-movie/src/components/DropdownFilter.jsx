import React, { useEffect, useState } from 'react';

const DropdownFilter = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/genres');
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres: ', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    onFilterChange(event.target.value);
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        {/* Year */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select Genre</option> {/* Pilihan default */}
          {genres.map((genre) => (
            <option key={genre.genre_id} value={genre.genre_id}>{genre.genre}</option> // Menampilkan nama genre
          ))}
        </select>

        {/* Genre */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select Genre</option> {/* Pilihan default */}
          {genres.map((genre) => (
            <option key={genre.genre_id} value={genre.genre_id}>{genre.genre}</option> // Menampilkan nama genre
          ))}
        </select>

        {/* Status */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select Genre</option> {/* Pilihan default */}
          {genres.map((genre) => (
            <option key={genre.genre_id} value={genre.genre_id}>{genre.genre}</option> // Menampilkan nama genre
          ))}
        </select>

        {/* Availability */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select Genre</option> {/* Pilihan default */}
          {genres.map((genre) => (
            <option key={genre.genre_id} value={genre.genre_id}>{genre.genre}</option> // Menampilkan nama genre
          ))}
        </select>

        {/* Award */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Select Genre</option> {/* Pilihan default */}
          {genres.map((genre) => (
            <option key={genre.genre_id} value={genre.genre_id}>{genre.genre}</option> // Menampilkan nama genre
          ))}
        </select>

        {/* {['Year', 'Genre', 'Status', 'Availability', 'Award'].map((filter, idx) => (
          <select key={idx} className="border rounded-lg p-2 bg-gray-700">
            <option>{filter}</option>
          </select>
        ))} */}
      </div>
      <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
        Submit
      </button>
      <select className="border rounded-lg p-2 bg-gray-700">
        <option>Alphabetics</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
