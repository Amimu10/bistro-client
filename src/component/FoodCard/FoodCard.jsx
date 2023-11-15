
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card  bg-[#F3F3F3] shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-[#111827] text-white absolute right-0 px-4 py-2 rounded-md mt-4 mr-4 font-inter font-semibold">$ {price}</p>
      <div className="card-body">
        <h2 className=" text-[20px] text-[#151515] font-semibold font-inter text-center">{name}</h2>
        <p className="text-[#737373] text-base font-inter font-normal">{recipe}</p> 
        <div className="card-actions justify-center"> 
          <button className=" border-b-2 hover:bg-[#111827] hover:text-[#BB8506] border-[#BB8506] p-2 rounded-md font-inter font-medium text-[20px] my-2 text-[#BB8506] bg-[#E8E8E8] ">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
