import FoodCard from "../../../component/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1200px] px-5"> 
           {
               items.map((item => <FoodCard key={item._id} item={item}></FoodCard>))
            }

           </div>
    );
};

export default OrderTab;