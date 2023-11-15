import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover";
import MenuItem from "../../../Shared/MenuItem";

const MenuCategory = ({ items, title, subTitle, img }) => {
  return ( 
    <div>
    {
        title &&   <Cover 
        img={img}
        title={title}
        subTitle={subTitle} 
      ></Cover> 
    }
      <div className="grid md:grid-cols-2 gap-8  my-12 max-w-[1200px] mx-auto px-5 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem> 
        ))} 
      </div>
     <div className="text-center mb-8">  
    <Link to={`/order/${title}`}>
    <button className="bg-white border-4 border-t-0 border-x-0 p-2 rounded-md text-[#1F2937] font-inter text-[20px] font-medium border-b-[#1F2937] btn hover:bg-[#EEFF25]">ORDER YOUR FAVOURITE FOOD</button>
    </Link>
     </div> 
    </div>
  );
};

export default MenuCategory;
