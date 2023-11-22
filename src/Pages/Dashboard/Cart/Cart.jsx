import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const Cart = () => {
  const [cart, refetch] = useCart();  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0); 
  const axiosSecure = useAxiosSecure();  

  const handleDelete = (id) => { 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",  
    }).then((result) => {
      if (result.isConfirmed) {  
        axiosSecure.delete(`/carts/${id}`).then((res) => { 
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Successfully Deleted!", { duration: 3000 });
          }
        });
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <h2 className="my-4 text-[20px] font-normal font-inter italic text-[#D99904]">
          ---My Cart---
        </h2>
        <h3 className="text-[#151515] font-inter lg:text-[40px] text-[32px] font-normal  ">
          WANNA ADD MORE?
        </h3>
      </div>
      <div className="flex justify-evenly mb-4">
        <h2 className="text-[#151515] font-cinzel text-[32px] font-semibold">
          Total orders: {cart.length}
        </h2>
        <h3 className="text-[#151515] font-cinzel text-[32px] font-semibold">
          total price: ${totalPrice}{" "}
        </h3>
        <Link>
          <button className="bg-[#D1A054] p-2 text-white font-semibold font-cinzel rounded-md">
            PAY
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead
            className="bg-[#D1A054] text-white"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-[75px]">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    {item.name}
                  </td>
                  <td className="text-[#737373] text-base font-inter font-normal">
                    $ {item.price}
                  </td>
                  <th className="mb-4"> 
                    <button
                      onClick={() => handleDelete(item._id)}
                      className=" p-2 flex items-center justify-center rounded-md bg-[#B91C1C] text-[25px] text-white"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  There is no data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
