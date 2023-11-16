import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../public/loader.json"; 
import Lottie from "lottie-react"; 
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    const location = useLocation(); 
    if(loading){
       return <Lottie animationData={Loader} />
    } 
    if(user) {
        return children;    
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate> 
      
    
};

export default PrivateRoute;