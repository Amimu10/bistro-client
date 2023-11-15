import { Parallax} from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img} 
      bgImageAlt="menu-bg" 
      strength={-200} 
      className="bg-cover w-full h-full"
    >
      <div
        className="hero h-[600px] bg-fixed"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" font-cinzel max-w-[1096px] h-[250px] p-6 mx-auto flex flex-col items-center justify-center" style={{ background: 'linear-gradient(rgba(21, 21, 21, 0.60), rgba(21, 21, 21, 0.60))'}}>
            <h1 className="font-bold lg:text-[58px] md:text-[42px] text-[32px]">
              {title}
            </h1>
            <p className=" text-[20px] font-semibold">{subTitle}</p> 
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
