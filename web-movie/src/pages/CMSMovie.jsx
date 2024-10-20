import DramaTable from "../components/DramaTable";
import FilterFormDrama from "../components/FilterFormDrama";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const CMSMovie = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-8 min-h-screen w-full">
                    <div>
                        <h1 className="text-2xl font-bold mb-4 text-white">Movie</h1>
                    </div>
                    <FilterFormDrama />
                    <DramaTable />
                </div>
            </div>
        </div>
    )
}

export default CMSMovie;