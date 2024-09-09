// src/components/CommentsPage.jsx
import React from 'react';

const CommentsPage = () => {
    return (
        <div className="flex-1 p-8 min-h-screen w-full">
            <div>
                <h1 className="text-2xl font-bold mb-4 text-white">Comments</h1>
            </div>
            {/* Form */}
            <form action="" className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex space-x-4 justify-start items-center mb-4 gap-4">
                    <div className="flex-1 flex items-center space-x-4">
                        <label htmlFor="" className="mr-4">Filtered By :</label>
                        <select className="border rounded-lg p-2 bg-gray-700">
                            <option>None</option>
                            <option>Approved</option>
                            <option>Unapproved</option>
                        </select>
                    </div>
                    <div className="flex-1 flex items-center space-x-4">
                        <label htmlFor="" className="mr-4">Shows :</label>
                        <select className="border rounded-lg p-2 bg-gray-700">
                            <option>10</option>
                        </select>
                    </div>
                    <div className="flex-1 justify-self-end space-x-4">
                        <input
                            type="text"
                            placeholder="Search Comment"
                            className="border rounded-lg p-2 w-3/4 mr-4 text-black"
                            id="search-comment"
                        />
                    </div>
                </div>
            </form>
            
            <div className="w-full">
                {/* Table */}
                <table className="min-w-full bg-gray-800 shadow-md rounded">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="py-2 px-4 text-left"></th>
                            <th className="py-2 px-4 text-left">Username</th>
                            <th className="py-2 px-4 text-left">Rate</th>
                            <th className="py-2 px-4 text-left">Drama</th>
                            <th className="py-2 px-4 text-left">Comments</th>
                            <th className="py-2 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-4"><input type="checkbox" /></td>
                            <td className="p-4">
                                <p>Nara</p>
                            </td>
                            <td className="p-4">
                                <span>★★★★★</span>
                            </td>
                            <td className="p-4">
                                <p>[2024] Japan - Eye Love You</p>
                            </td>
                            <td className="p-4">
                                <p>I love this drama. It taught me a lot about money and finance...</p>
                                <p>What the most thing that I love is about the kindness.</p>
                            </td>
                            <td className="p-4">
                                <p>Unapproved</p>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-4"><input type="checkbox" /></td>
                            <td className="p-4">
                                <p>Luffy</p>
                            </td>
                            <td className="p-4">
                                <span>★★</span>
                            </td>
                            <td className="p-4">
                                <p>[2024] Japan - Eye Love You</p>
                            </td>
                            <td className="p-4">
                                <p>Meh</p>
                            </td>
                            <td className="p-4">
                                <p>Approved</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex mt-4 gap-2">
                <button className="px-4 py-2 rounded-md border">Select All</button>
                <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Approve</button>
                <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
        </div>
    );
};

export default CommentsPage;
