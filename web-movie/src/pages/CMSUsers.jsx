// src/components/UsersPage.jsx
import React from 'react';

const UsersPage = () => {
    return (
        <div className="flex-1 p-8 min-h-screen w-full">
            <div>
                <h1 className="text-2xl font-bold mb-4 text-white">Users</h1>
            </div>
            {/* Form */}
            <form action="" className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex flex-row mr-4 gap-4">
                    <div className="flex-1 flex items-center space-x-4">
                        <label htmlFor="username" className="mr-4">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="p-2 border rounded w-3/4 mb-4 text-black"
                            id="username"
                        />
                    </div>
                    <div className="flex-1 flex items-center space-x-4">
                        <label htmlFor="email" className="mr-4">Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="p-2 border rounded w-3/4 mb-4 text-black"
                            id="email"
                        />
                    </div>
                </div>
                <div className="flex items-center mb-4 gap-4">
                    <input
                        type="text"
                        placeholder="Search Username"
                        className="border rounded-lg p-2 w-1/3 text-black"
                        id="search-username"
                    />
                    <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 w-24">
                        Submit
                    </button>
                </div>
            </form>

            <div className="w-full">
                {/* Table */}
                <table className="min-w-full bg-gray-800 shadow-md rounded">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="py-2 px-4 text-left">#</th>
                            <th className="py-2 px-4 text-left w-4/12">Username</th>
                            <th className="py-2 px-4 text-left w-4/12">Email</th>
                            <th className="py-2 px-4 text-left w-3/12">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">anita1</td>
                            <td className="py-2 px-4">anita@gmail.com</td>
                            <td className="py-2 px-4">
                                <a href="#" className="text-blue-500 hover:underline mr-4">Send First Email</a>
                                <a href="#" className="text-blue-500 hover:underline mr-4">Edit</a>
                                <a href="#" className="text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">2</td>
                            <td className="py-2 px-4">borang</td>
                            <td className="py-2 px-4">bora@yahoo.com</td>
                            <td className="py-2 px-4">
                                <a href="#" className="text-blue-500 hover:underline mr-4">Send First Email</a>
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

export default UsersPage;
