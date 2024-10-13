import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()){
      navigate(`/search?query=${searchTerm}`);
    }
  }

  return (
    <header className="bg-black text-yellow-500 p-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Dramaku</h1>
      <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 p-2 rounded border bg-white-800 text-black"
        />
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
      <Link to="/login">
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          LOGIN
        </button>
      </Link>
    </header>
  )
};

export default Header;
