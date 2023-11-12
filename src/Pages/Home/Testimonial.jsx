import SectionTitle from "../../component/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react"; 
// import ReactStarsRating from 'react-awesome-stars-rating';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import reviewIcon from "../../assets/icon/coma.png";

const Testimonial = () => { 
    const [reviews, setReviews] = useState([]); 

    useEffect(() => {
        fetch("/reviews.json")
          .then((res) => res.json())
          .then((data) => {
           console.log(data);
           setReviews(data);
          });
      }, []);


  return ( 
    <section>
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide key={review._id}>  
             <div className="flex flex-col items-center mx-20 my-12">
             <Rating style={{maxWidth: 180}} value={review.rating} readOnly />
                 <img  className="w-[80px] my-8" src={reviewIcon} alt="" />
                 <p className="text-[#444] text-lg font-inter">{review.details}</p>
                 <h3 className="text-[#CD9003] text-[32px] md:text-[20px] font-medium font-inter">{review.name}</h3> 
             </div>

            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
