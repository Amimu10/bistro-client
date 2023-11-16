import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

 const handleLogOut = () => {
         logOut()
         .then((result) =>{
          console.log(result.user); 
         })
         .catch(err => { 
         console.log(err);
         })
   
 }
  const navItems = (
    <>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/contact">
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/dashboard">
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/menu">
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/order">
          ORDER FOOD{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#EEFF25]" to="/secret"> 
          SECRET 
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink> 
           <button  className="hover:text-[#EEFF25]" onClick={handleLogOut}>LOGOUT</button>
          </NavLink>  
        </li>
      ) : ( 
        <li>
          <NavLink className="hover:text-[#EEFF25]" to="/login">
            LOGIN
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 text-white mx-auto px-5 bg-black bg-opacity-40 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white font-extrabold mt-3 z-[1] p-2 shadow bg-[#970A0A] rounded-box w-52 font-cinzel"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <p className="font-extrabold font-cinzel">Bistro Boss</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-4 hover:focus:text-[#EEFF25] menu-md menu-horizontal font-semibold px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
