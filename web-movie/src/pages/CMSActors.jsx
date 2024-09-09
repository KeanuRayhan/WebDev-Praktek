// src/components/ActorsPage.jsx
import React from 'react';

const ActorsPage = () => {
    return (
        <div className="flex-1 p-8 min-h-screen w-full">
            <div>
                <h1 className="text-2xl font-bold mb-4 text-white">Actors</h1>
            </div>
            {/* Form */}
            <form action="" className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col mr-4">
                    <div className="col-span-1 flex items-center space-x-4">
                        <label htmlFor="country" className="w-1/4">Country</label>
                        <input
                            type="text"
                            placeholder="Country"
                            className="p-2 border rounded col-span-1 w-3/4 mb-4"
                            id="country"
                        />
                    </div>
                    <div className="col-span-1 flex items-center space-x-4">
                        <label htmlFor="actor-name" className="w-1/4">Actor Name</label>
                        <input
                            type="text"
                            placeholder="Actor Name"
                            className="p-2 border rounded col-span-1 w-3/4 mb-4"
                            id="actor-name"
                        />
                    </div>
                    <div className="col-span-1 flex items-center space-x-4">
                        <label htmlFor="birth-date" className="w-1/4">Birth Date</label>
                        <input
                            type="date"
                            placeholder="Birth Date"
                            className="p-2 border rounded col-span-1 w-3/4 mb-4 text-gray-400"
                            id="birth-date"
                        />
                    </div>
                </div>
                <div className="col-span-1 flex items-center space-x-4">
                    <label htmlFor="upload-picture">Upload Picture</label>
                    <input
                        type="file"
                        className="border rounded p-2"
                        id="upload-picture"
                    />
                </div>
                <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 w-24">
                    Submit
                </button>
            </form>

            <div className="w-full">
                {/* Table */}
                <table className="min-w-full bg-gray-800 shadow-md rounded">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="py-2 px-4 text-left">#</th>
                            <th className="py-2 px-4 text-left w-2/12">Countries</th>
                            <th className="py-2 px-4 text-left w-4/12">Actor Name</th>
                            <th className="py-2 px-4 text-left w-3/12">Birth Date</th>
                            <th className="py-2 px-4 text-left w-2/12">Photos</th>
                            <th className="py-2 px-4 text-left w-1/12">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">
                                <p>Japan</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>Takuya Kimura</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>19 December 1975</p>
                            </td>
                            <td className="py-2 px-4">
                                <div className="w-30 h-40 bg-gray-300"></div>
                            </td>
                            <td className="py-2 px-4">
                                <a href="#" className="text-blue-500 hover:underline mr-4">Edit</a>
                                <a href="#" className="text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">2</td>
                            <td className="py-2 px-4">
                                <p>Japan</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>Yuko Takeuchi</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>19 October 1977</p>
                            </td>
                            <td className="py-2 px-4">
                                <div className="w-30 h-40 bg-gray-300"></div>
                            </td>
                            <td className="py-2 px-4">
                                <a href="#" className="text-blue-500 hover:underline mr-4">Edit</a>
                                <a href="#" className="text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">3</td>
                            <td className="py-2 px-4">
                                <p>Japan</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>Takuya Kimura</p>
                            </td>
                            <td className="py-2 px-4">
                                <p>19 December 1975</p>
                            </td>
                            <td className="py-2 px-4">
                                <div className="w-30 h-40 bg-gray-300"></div>
                            </td>
                            <td className="py-2 px-4">
                                <a href="#" className="text-blue-500 hover:underline mr-4">Edit</a>
                                <a href="#" className="text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActorsPage;
