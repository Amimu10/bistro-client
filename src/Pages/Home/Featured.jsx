import SectionTitle from "../../component/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <section className="featured-bg bg-featured-bg bg-fixed py-8 overflow-hidden text-white max-w-[1200px] mx-auto px-5">  
      <SectionTitle className="text-white" 
           subHeading={"---Check it out---"}
           heading={<p className="text-white z-10">{"FROM OUR MENU"}</p>}
      ></SectionTitle> 
      <div className="md:flex justify-center items-center py-8 gap-8">
      <div className="flex-1 mx-auto w-full">
      <img  src={featuredImg} alt="" /> 
      </div>
        <div className="flex-1"> 
          <p>
            <p className="text-[20px]">March 20, 2023</p>
            <p className="text-[20px]">WHERE CAN I GET SOME?</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-4 btn font-cinzel hover:bg-[#4D4D4D] bg-[#4D4D4D] p-2 border-t-0 border-x-0 text-white mt-4 rounded-md border-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
