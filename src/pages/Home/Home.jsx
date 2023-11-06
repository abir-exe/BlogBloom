import Banner from "./Banner";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";
import Photograph from "./Photograph";
import Recent from "./Recent";



const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Recent></Recent>
            <NewsLetter></NewsLetter>
            <Photograph></Photograph>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;