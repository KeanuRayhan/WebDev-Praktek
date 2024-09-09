import React from "react";
import Filter from "../components/Filter"
import ListDrama from "../components/ListDrama"

function Searchpage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-black text-yellow-500 p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dramaku</h1>
        <div className="flex items-center space-x-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 rounded border bg-white-800 text-white"
          />
          <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          LOGIN
        </button>
      </header>

      {/* Sidebar & Main Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-1/6 bg-black p-4 space-y-8">
          <nav className="space-y-4">
            <a href="#" className="block text-lg">Home</a>
            <a href="#" className="block text-lg">Downloads</a>
            <a href="#" className="block text-lg">Categories</a>
            <a href="#" className="block text-lg">Trending</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Filters and Sorting */}
          <Filter/>
          {/* List Drama */}
          <ListDrama/>
          <ListDrama/>
          <ListDrama/>
          <ListDrama/>
        </main>
      </div>
    </div>
  );
}


export default Searchpage;
