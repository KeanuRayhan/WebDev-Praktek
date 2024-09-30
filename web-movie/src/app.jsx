import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import RegistrationPage from './pages/RegistrationPage'; // Import RegistrationPage
import CountriesPage from './pages/CMSCountries'; // Import CountriesPage
import CommentsPage from './pages/CMSComments';
import ActorsPage from './pages/CMSActors';
import UsersPage from './pages/CMSUsers';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <div className="bg-zinc-950 text-white min-h-screen">
                <Routes>
                    {/* Rute hanya untuk halaman login */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route
                        path="/countries"
                        element={
                            <>
                                <Header />
                                <div className="flex">
                                    <Sidebar />
                                    <main className="flex-1 p-8">
                                        <CountriesPage />
                                    </main>
                                </div>
                            </>
                        }
                    />
                    {/* Rute untuk halaman comments */}
                    <Route
                        path="/comments"
                        element={
                            <>
                                <Header />
                                <div className="flex">
                                    <Sidebar />
                                    <main className="flex-1 p-8">
                                        <CommentsPage />
                                    </main>
                                </div>
                            </>
                        }
                    />
                    {/* Rute untuk halaman actors */}
                    <Route
                        path="/actors"
                        element={
                            <>
                                <Header />
                                <div className="flex">
                                    <Sidebar />
                                    <main className="flex-1 p-8">
                                        <ActorsPage />
                                    </main>
                                </div>
                            </>
                        }
                    />
                    {/* Rute untuk halaman users */}
                    <Route
                        path="/users"
                        element={
                            <>
                                <Header />
                                <div className="flex">
                                    <Sidebar />
                                    <main className="flex-1 p-8">
                                        <UsersPage />
                                    </main>
                                </div>
                            </>
                        }
                    />
                    {/* Rute untuk halaman utama dan lainnya */}
                    <Route
                        path="/*"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

