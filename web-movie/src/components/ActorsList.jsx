import React from 'react';

const ActorsList = () => {
    return (
        <div className="mt-8 grid grid-cols-10 gap-1">
            {/* Ulangi ini untuk setiap aktor */}
            <div className="text-center">
                <img src="actor1.png" alt="Actor 1" className="w-24 h-36 mx-auto rounded bg-gray-700 object-cover" />
                <p className="mt-2">Actor Name</p>
            </div>
            {/* Tambahkan aktor lain di sini */}
        </div>
    );
};

export default ActorsList;
