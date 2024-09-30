import React from 'react';

function ListDrama({ title, url, year, genres, actors }) {
    return (
      <div className="p-4 space-y-5">
        <div className="bg-gray-800 px-5 py-6 rounded-lg flex items-start">
          <img src={url} alt={title} className="w-32 h-40 rounded-lg mr-10 object-cover" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <div className="mt-1">{year}</div>
              <div className="mt-1">{genres.join(", ")}</div>
              <div className="mt-1">{actors.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ListDrama;