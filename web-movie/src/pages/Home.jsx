import Carousel from "../components/Carousel.jsx";
import Header from "../components/Header.jsx";
import Judul from "../components/Judul.jsx";
import ListFilm from "../components/ListFIlm.jsx";
// import 'flowbite/dist/flowbite.min.css';
// import 'flowbite/dist/flowbite.min.js';
import SidebarHome from "../components/SidebarHome.jsx";

const Home = () => {
    return (
        <div className="bg-gray-900 text-white">
        <Header />
        
        <div className="flex min-h-screen">
            <SidebarHome />
            <div className="flex-1 p-8">
            <div className="max-w-screen-lg mx-auto">
                <Carousel />
            </div>
            <Judul />
            <ListFilm className="w-5/5"/>
            </div>
        </div>

        </div>
    );
}

export default Home;