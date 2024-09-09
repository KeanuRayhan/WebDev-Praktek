import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="bg-black flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-80">
                <h2 className="text-center text-yellow-500 text-xl font-bold mb-6">Dramaku</h2>
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
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-white mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <div className="flex justify-center mb-2">
                        <button 
                            type="submit" 
                            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Login
                        </button>
                    </div>
                    <h3 className="text-center text-white text-sm font-normal mb-2">Or</h3>
                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center"
                        >
                            <img 
                                src="https://img.icons8.com/color/16/000000/google-logo.png" 
                                alt="Google logo" 
                                className="mr-2"
                            /> 
                            Login with Google
                        </button>
                    </div>
                    <p className="mt-4 text-center text-white text-sm">
                        Belum punya akun? <Link to="/register" className="text-yellow-500 hover:underline">Daftar di sini</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;


