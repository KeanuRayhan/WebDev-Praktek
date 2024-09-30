import Carousel from "../components/Carousel.jsx";
import Header from "../components/Header.jsx";
import Judul from "../components/Judul.jsx";
import ListFilm from "../components/ListFIlm.jsx";
// import 'flowbite/dist/flowbite.min.css';
// import 'flowbite/dist/flowbite.min.js';
import Sidebar from "../components/Sidebar.jsx";

const Home = () => {
    return (
        <div className=" text-white">
        <Header />
        
        <div className="flex min-h-screen">
            <Sidebar />
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