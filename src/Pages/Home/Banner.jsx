import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/home/01.jpg"; 
import img2 from "../../assets/home/02.jpg"; 
import img3 from "../../assets/home/03.png"; 
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
const Banner = () => {
    const imageStyle = {
        maxHeight: "570px", // Set the desired max height here
    };
    return (
        <Carousel>
                <div>
                <img src={img1} style={imageStyle}/>
                </div>
                <div>
                <img src={img2} style={imageStyle}/>
                </div>
                <div>
                <img src={img3} style={imageStyle}/>
                </div>
                <div>
                <img src={img4} style={imageStyle}/>
                </div>
                <div>
                <img src={img5} style={imageStyle}/>
                </div>
                <div>
                <img src={img6} style={imageStyle}/>
                </div>
            </Carousel>
    );
};

export default Banner;

