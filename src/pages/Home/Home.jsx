import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Recent from "./Recent";



const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Recent></Recent>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;