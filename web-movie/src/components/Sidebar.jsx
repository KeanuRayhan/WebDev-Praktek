import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <aside className="w-1/6 bg-black p-4 space-y-8">
        <nav className="space-y-4">
            <Link to="/dramas" className="block text-lg text-white hover:text-yellow-500">Dramas</Link>
            <Link to="/countries" className="block text-lg text-white hover:text-yellow-500">Countries</Link>
            <Link to="/awards" className="block text-lg text-white hover:text-yellow-500">Awards</Link>
            <Link to="/genres" className="block text-lg text-white hover:text-yellow-500">Genres</Link>
            <Link to="/actors" className="block text-lg text-white hover:text-yellow-500">Actors</Link>
            <Link to="/comments" className="block text-lg text-white hover:text-yellow-500">Comments</Link>
            <Link to="/Genres" className="block text-lg text-white hover:text-yellow-500">Genres</Link>
            <Link to="/users" className="block text-lg text-white hover:text-yellow-500">Users</Link>
        </nav>
    </aside>
);

export default Sidebar;