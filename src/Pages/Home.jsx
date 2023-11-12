import Banner from "./Home/Banner";
import Category from "./Home/Category";
import Featured from "./Home/Featured";
import PopularMenu from "./Home/PopularMenu";
import Testimonial from "./Home/Testimonial";
const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <Category></Category>
             <PopularMenu></PopularMenu> 
             <Featured></Featured>  
             <Testimonial></Testimonial> 
        </div>
    );
};

export default Home;