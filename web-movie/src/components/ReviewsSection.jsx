import React from 'react';

const ReviewsSection = () => {
    return (
        <div className="w-3/4 mt-8">
            <h2 className="text-xl font-bold text-white">What People Think About This Drama</h2>
            <div className="space-y-4 mt-4">
                {/* Ulangi blok ini untuk setiap review */}
                <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-400">User1</h3>
                        <span className="text-yellow-500">★★★★★</span>
                    </div>
                    <p className="mt-2 text-gray-400">This is a wonderful drama! I love it so much!!!</p>
                </div>
                {/* Tambahkan review lain di sini */}
            </div>
        </div>
    );
};

export default ReviewsSection;
