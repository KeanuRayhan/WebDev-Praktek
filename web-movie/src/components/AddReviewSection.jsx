import React from 'react';

const AddReviewSection = () => {
    return (
        <div className="w-80 mt-8">
            <h2 className="text-xl font-bold text-white">Add Your Review</h2>
            <div className="space-y-4 mt-4">
                <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700" />
                <textarea placeholder="Your thoughts" className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 h-32"></textarea>
                <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">Submit</button>
            </div>
        </div>
    );
};

export default AddReviewSection;
