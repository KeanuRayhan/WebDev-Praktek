import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-black text-yellow-500 p-4 flex items-center justify-between">
    <h1 className="text-3xl font-bold">Dramaku</h1>
    <input type="text" placeholder="Search" className="w-1/3 p-2 rounded border text-black" />
    <Link to="/login">
      <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">LOGIN</button>
    </Link>
  </header>
);

export default Header;


