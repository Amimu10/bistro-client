import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const LayOut = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("/login") ||  location.pathname.includes("/register");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet /> 
      {noHeaderFooter || <Footer />}
      
    </div>
  );
};

export default LayOut;
