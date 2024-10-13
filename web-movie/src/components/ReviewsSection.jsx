import React from 'react';

const ReviewsSection = ({ reviews }) => {
    return (
        <div className="w-3/4 mt-8">
            <h2 className="text-xl font-bold text-white">What People Think About This Drama</h2>
            <div className="space-y-4 mt-4">
                {/* Ulangi blok ini untuk setiap review */}
                {reviews.map((review, index) => {
                    return (
                        <div key={index} className="border-b border-gray-700 pb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-400">{review.user.username}</h3>
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <p className="mt-2 text-gray-400">{review.comments}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ReviewsSection;
