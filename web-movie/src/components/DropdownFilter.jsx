import React, { useEffect, useState } from 'react';

const DropdownFilter = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const [platforms, setPlatforms] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const [statuses] = useState([
    { id: 'approved', name: 'Approved' }, 
    { id: 'unapproved', name: 'Unapproved' },
  ]);
  const [selectedStatus, setSelectedStatus] = useState('');

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

    const fetchPlatforms = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/platforms');
        const data = await response.json();
        setPlatforms(data);
      } catch (error) {
        console.error('Error fetching platforms: ', error);
      }
    }

    fetchGenres();
    fetchPlatforms();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    onFilterChange({ genre_id: event.target.value, platform_id: selectedPlatform, status: selectedStatus });
  }

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    onFilterChange({ genre_id: selectedGenre, platform_id: event.target.value, status: selectedStatus });
  }

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    onFilterChange({ genre_id: selectedGenre, platform_id: selectedPlatform, status: event.target.value });
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        {/* Year */}

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
          className='border rounded-lg p-2 bg-gray-700'
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="">Status</option>
          {statuses.map((status) => (
            <option key={status.id} value={status.id}>{status.name}</option>
          ))}
        </select>

        {/* Availability */}
        <select 
          className="border rounded-lg p-2 bg-gray-700"
          value={selectedPlatform}
          onChange={handlePlatformChange}
        >
          <option value="">Availability</option> {/* Pilihan default */}
          {platforms.map((platform) => (
            <option key={platform.platform_id} value={platform.platform_id}>{platform.platform}</option> // Menampilkan nama platform
          ))}
        </select>

        {/* Award */}
        

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
