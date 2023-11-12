
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item; 

    return (
        <div className="flex gap-8 ">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[118px] " src={image} alt="" />
            <div>
                <h3 className="font-cinzel text-[20px] font-normal text-[#151515]">{name}.......</h3>
                <p className=" text-base text-[#737373] font-inter">{recipe}</p>
            </div>
            <p className="font-inter text-[20px] font-normal text-[#BB8506]">${price}</p> 
        </div>
    );
};

export default MenuItem;