import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaShoppingBag,
  FaUsers,
  FaUtensils,

  FaWallet,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import reviewImg from "../../assets/icon/feedback.png";
import bookingImg from "../../assets/icon/booking.png";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
// import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin(); 
  return (
    <div className="flex max-w-[1200px] mx-auto px-6">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <div className="px-6 my-6 font-cinzel text-[#151515]">
          <h3 className="font-bold text-[22px]">BISTRO BOSS</h3>
          <p
            className="font-bold text-[18px] "
            style={{ letterSpacing: " 6.647px" }} 
          >
            Restaurant
          </p>
        </div>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="mt-5">
                <Link to="/dashboard/adminHome">
                  <FaHome className="text-2xl"></FaHome>
                  ADMIN HOME
                </Link>
              </li>
              <li className="">
                <Link to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  ADD ITEMS
                </Link>
              </li>
              <li className="">
                <Link to="/dashboard/manageItems">
                  <FaList></FaList>
                  MANAGE ITEMS
                </Link>
              </li>
              <li className="">
                <Link to="/dashboard/bookings">
                  <FaBook></FaBook>
                  MANAGE BOOKINGS
                </Link>
              </li>
              <li className="">
                <Link to="/dashboard/users">
                  <FaUsers></FaUsers>
                  ALL USERS
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/userHome">
                  <FaHome className="text-2xl"></FaHome>
                  USER HOME
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reservation">
                  <FaCalendar className="text-2xl"></FaCalendar>
                  RESERVATION
                </Link>
              </li>
              <li>
                <Link to="/dashboard/payment">
                  <FaWallet className="text-2xl"></FaWallet>
                  PAYMENT HISTORY
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart" className="hover:text-white">
                  <FaCartPlus className="text-2xl"></FaCartPlus>
                  MY CART ({cart.length})
                </Link>
              </li>
              <li>
                <Link to="/dashboard/review">
                  <img src={reviewImg} alt="" />
                  ADD REVIEW
                </Link>
              </li>
              <li className="border-white border-b-2 pb-5">
                <Link to="/dashboard/booking">
                  <img src={bookingImg} alt="" />
                  MY BOOKING
                </Link>
              </li>
            </>
          )}

          <li className="mt-5">
            <Link to="/">
              <FaHome className="text-2xl"></FaHome>
              HOME
            </Link>
          </li>
          <li className="">
            <Link to="/dashboard/menu">
              <FiMenu className="text-2xl" />
              MENU
            </Link>
          </li>
          <li className="">
            <Link to="/dashboard/shop">
              <FaShoppingBag className="text-2xl" />
              SHOP
            </Link>
          </li>
          <li className="">
            <Link to="/dashboard/contact">
              <MdEmail className="text-2xl" />
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 ml-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
