import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popurItems = data.filter((item) => item.category === "popular");
        setMenu(popurItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
       <div className="grid md:grid-cols-2 gap-8 max-w-screen-xl mx-auto  mb-12 ">
        {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
