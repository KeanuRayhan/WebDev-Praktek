import Header from '../components/Header';
import TrailerSection from '../components/TrailerSection';
import ActorsList from '../components/ActorsList';
import ReviewsSection from '../components/ReviewsSection';
import SidebarHome from '../components/SidebarHome';
import Dramadetails from '../components/Dramadetails';
import Synopsis from '../components/Synopsis';

const PageDetails = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-white">
            {/* Header Section */}
            <Header />
            
            {/* Main Content with Sidebar */}
            <div className="flex">
                {/* Sidebar */}
                <SidebarHome />

                {/* Main Content */}
                <main className="w-5/6 p-4">
                    {/* Trailer Section */}
                    <TrailerSection />
                    {/* Movie Details Section */}
                    <section className="mb-8">
                        <Dramadetails />
                    </section>

                    {/* Synopsis Section */}
                    <Synopsis />

                    {/* Actors List Section */}
                    <section className="mt-12">
                        <h2 className="text-xl font-bold text-white">Cast</h2>
                        <ActorsList />
                    </section>

                    {/* Reviews Section */}
                    <section className="mt-12">
                        <ReviewsSection />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PageDetails;
