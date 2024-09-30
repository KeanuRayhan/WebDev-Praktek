import React from 'react';

const TrailerSection = () => {
    return (
        <div className="w-auto mx-auto mt-2">
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

