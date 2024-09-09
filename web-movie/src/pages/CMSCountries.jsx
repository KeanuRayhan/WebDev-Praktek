import React from 'react';

const CountriesPage = () => (
    <div className="flex-1 p-8 min-h-screen">
        <div>
            <h1 className="text-2xl font-bold mb-4 text-white">Countries</h1>
        </div>
        <form action="" className="flex space-x-4 mb-6">
            <label htmlFor="search-country" className="mr-4 text-white">Country</label>
            <input
                type="text"
                placeholder="Search Country"
                className="border rounded-lg p-2 w-1/3 mr-4 text-black"
                id="search-country"
            />
            <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">Submit</button>
        </form>
        <div className="w-full">
            <table className="min-w-full bg-gray-800 shadow-md rounded">
                <thead className="bg-gray-900">
                    <tr>
                        <th className="py-2 px-4 text-left w-1/12">#</th>
                        <th className="py-2 px-4 text-left w-8/12">Countries</th>
                        <th className="py-2 px-4 text-left w-3/12">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4 flex items-center">Japan</td>
                        <td className="py-2 px-4">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Rename</a>
                            <a href="#" className="text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-4">2</td>
                        <td className="py-2 px-4 flex items-center">Korea</td>
                        <td className="py-2 px-4">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Rename</a>
                            <a href="#" className="text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-4">3</td>
                        <td className="py-2 px-4 flex items-center">China</td>
                        <td className="py-2 px-4">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Rename</a>
                            <a href="#" className="text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-4">4</td>
                        <td className="py-2 px-4 flex items-center">United States</td>
                        <td className="py-2 px-4">
                            <a href="#" className="text-blue-500 hover:underline mr-4">Rename</a>
                            <a href="#" className="text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default CountriesPage;
