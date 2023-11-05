import Banner from "./Banner";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";
import Recent from "./Recent";



const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Recent></Recent>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;