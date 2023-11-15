
import SectionTitle from "../../component/SectionTitle";
// import MenuItem from "../../Shared/MenuItem";
// import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
  // const [menu] = UseMenu(); 
  // const popular = menu.filter(item => item.category === "popular");  
  
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popurItems = data.filter((item) => item.category === "popular");
  //       setMenu(popurItems);
  //     });
  // }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5"> 
      <SectionTitle 
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      
    </section>
  );
};

export default PopularMenu;
