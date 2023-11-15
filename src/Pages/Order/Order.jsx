import { useState } from "react";
import Cover from "../../Shared/Cover";
import orderCoverImg from "../../assets/order/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";
// import FoodCard from "../../component/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks' ]; 
  const {category} = useParams(); 
  const initialIndex = categories.indexOf(category); 

    const [tabIndex, setTabIndex] = useState(initialIndex); 
    const [menu] = UseMenu(); 
    
    const desserts = menu.filter(item => item.category === "dessert"); 
    const pizzas = menu.filter(item => item.category === "pizza"); 
    const salads = menu.filter(item => item.category === "salad"); 
    const soups = menu.filter(item => item.category === "soup"); 
    const drinks = menu.filter(item => item.category === "drinks"); 
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title="ORDER FOOD"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center mt-12 mb-8 font-inter text-[24px] font-medium">
          <Tab>Salad</Tab> 
          <Tab>Pizza</Tab> 
          <Tab>Soups</Tab>
          <Tab>desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel> 
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizzas}></OrderTab> 
        </TabPanel>
        <TabPanel>
        <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        </Tabs>
    </div>
  );
};

export default Order;
