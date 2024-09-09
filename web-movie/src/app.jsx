import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dramadetails from './components/Dramadetails';
import ActorsList from './components/ActorsList';
import TrailerSection from './components/TrailerSection';
import ReviewsSection from './components/ReviewsSection';
import AddReviewSection from './components/AddReviewSection';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import RegistrationPage from './pages/RegistrationPage'; // Import RegistrationPage
import CountriesPage from './pages/CMSCountries'; // Import CountriesPage
import CommentsPage from './pages/CMSComments';
import ActorsPage from './pages/CMSActors';
import UsersPage from './pages/CMSUsers';

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
                                <Header />
                                <div className="flex">
                                    <Sidebar />
                                    <main className="flex-1 p-8">
                                        <Dramadetails />
                                        <ActorsList />
                                        <TrailerSection />
                                        <ReviewsSection />
                                        <AddReviewSection />
                                    </main>
                                </div>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

