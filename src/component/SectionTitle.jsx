
const SectionTitle = ({heading, subHeading}) => { 
    return ( 
        <div className="text-center my-8 md:w-4/12 mx-auto border-[#E8E8E8]">
            <p className="font-inter text-[#D99904] text-[20px] font-medium">{subHeading}</p> 
            <h3 className="text-[40px] font-inter font-normal text-[#151515] border-y-2">{heading}</h3>  
        </div>
    );
};

export default SectionTitle;