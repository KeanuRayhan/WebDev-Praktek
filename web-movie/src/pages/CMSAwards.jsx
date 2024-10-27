
import React from 'react';

const CmsAwards = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-black text-yellow-500 p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dramaku</h1>
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition">
          PROFIL
        </button>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-1/6 bg-black p-4 space-y-8">
          <nav className="space-y-4">
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Dramas</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Countries</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Awards</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Genres</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Actors</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Comments</a>
            <a href="#" className="block text-lg hover:text-yellow-500 transition">Users</a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Awards</h1>

          {/* Form Input */}
          <form className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-col md:flex-row items-start gap-5">
              {/* Country Input */}
              <div className="flex flex-col w-full md:w-1/4">
                <label htmlFor="country" className="text-lg mb-1">Country:</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter country"
                  className="border rounded-lg p-2 bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              {/* Year Input */}
              <div className="flex flex-col w-full md:w-1/6">
                <label htmlFor="year" className="text-lg mb-1">Year:</label>
                <input
                  type="text"
                  id="year"
                  placeholder="Enter year"
                  className="border rounded-lg p-2 bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              {/* Award Input */}
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="award" className="text-lg mb-1">Award:</label>
                <input
                  type="text"
                  id="award"
                  placeholder="Enter award"
                  className="border rounded-lg p-2 bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-start mt-4">
              <button type="submit" className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition">
                Submit
              </button>
            </div>
          </form>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left w-12 border-b border-gray-500">No</th>
                  <th className="py-3 px-4 text-left border-b border-gray-500">Country</th>
                  <th className="py-3 px-4 text-left border-b border-gray-500">Year</th>
                  <th className="py-3 px-4 text-left border-b border-gray-500">Award</th>
                  <th className="py-3 px-4 text-center border-b border-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">Japan</td>
                  <td className="py-3 px-4">2024</td>
                  <td className="py-3 px-4">Japanese Drama Awards Spring 2024</td>
                  <td className="py-3 px-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline">Edit</a> | 
                    <a href="#" className="text-red-500 hover:underline ml-2">Delete</a>
                  </td>
                </tr>
                <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">Korea</td>
                  <td className="py-3 px-4">2024</td>
                  <td className="py-3 px-4">Korean Drama Awards Spring 2024</td>
                  <td className="py-3 px-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline">Edit</a> | 
                    <a href="#" className="text-red-500 hover:underline ml-2">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsAwards;
