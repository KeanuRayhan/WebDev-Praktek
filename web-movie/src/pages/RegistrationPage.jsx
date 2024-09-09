import React from 'react';

const RegistrationPage = () => {
    return (
        <div className="bg-black flex items-center justify-center h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-center text-yellow-500 text-2xl font-bold mb-6">Registration</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-white mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                            placeholder="Enter your username" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white mb-2">Create Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeat-password" className="block text-white mb-2">Repeat Password</label>
                        <input 
                            type="password" 
                            id="repeat-password" 
                            name="repeat-password" 
                            className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                            placeholder="Repeat your password" 
                        />
                    </div>
                    <div className="flex justify-center mb-2">
                        <button 
                            type="submit" 
                            className="w-3/4 bg-yellow-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Sign Up
                        </button>
                    </div>

                    <h3 className="text-center text-white text-sm font-normal mb-2">Or</h3>

                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            className="w-3/4 bg-yellow-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center"
                        >
                            <img 
                                src="https://img.icons8.com/color/16/000000/google-logo.png" 
                                alt="Google logo" 
                                className="mr-2"
                            /> 
                            Sign Up with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
