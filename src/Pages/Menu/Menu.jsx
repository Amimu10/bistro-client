import { Helmet } from 'react-helmet-async'; 
import Cover from '../../Shared/Cover';
import menuImage from "../../assets/menu/banner3.jpg"; 
import dessertImg from "../../assets/menu/dessert-bg.jpeg"; 
import pizzaImg from "../../assets/menu/pizza-bg.jpg"; 
import saladImg from "../../assets/menu/salad-bg.jpg"; 
import soupImg from "../../assets/menu/soup-bg.jpg"; 
import UseMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../component/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();  
    const desserts = menu.filter(item => item.category === "dessert"); 
    const pizzas = menu.filter(item => item.category === "pizza"); 
    const salads = menu.filter(item => item.category === "salad"); 
    const soups = menu.filter(item => item.category === "soup"); 
    const offered = menu.filter(item => item.category === "offered"); 
    
    return (
        <div>
           <Helmet>
           <title>Bistro Boss | Menu</title> 
           </Helmet>
           <Cover img={menuImage} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>   
           <SectionTitle subHeading="---Don't miss---" heading="Today's Offer"></SectionTitle>
           <MenuCategory items={offered}></MenuCategory> 
           <MenuCategory items={desserts} title="dessert" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertImg} ></MenuCategory> 
           <MenuCategory items={pizzas} title="pizza" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzaImg}></MenuCategory> 
           <MenuCategory items={salads} title="salad" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladImg}></MenuCategory> 
           <MenuCategory items={soups} title="soup" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupImg}></MenuCategory> 

        </div> 
    );
};

export default Menu;
