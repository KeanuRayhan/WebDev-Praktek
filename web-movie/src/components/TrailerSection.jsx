import React from 'react';

const TrailerSection = () => {
    return (
        <div className="w-3/4 mx-auto mt-8">
            <h2 className="text-xl font-bold text-white">Watch Trailer</h2>
            <div className="mt-4">
                <iframe
                    width="100%"
                    height="480"
                    src="https://www.youtube.com/embed/example-trailer"
                    title="Trailer"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded border border-gray-700"
                ></iframe>
            </div>
        </div>
    );
};

export default TrailerSection;

