
import { RiDeleteBin5Line } from "react-icons/ri";
import UseMenu from "../../../Hooks/UseMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"; 
import { Link } from "react-router-dom";

const ManageItems = () => { 
  const [menu, , refetch] = UseMenu();  
  console.log(menu);  
  const axiosSecure = useAxiosSecure(); 
  // console.log(axiosSecure); 

  const handleDeleteItem = (item) => { 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!", 
      icon: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",  
    }).then( async(result) => { 
      if (result.isConfirmed) {  
          const res = await axiosSecure.delete(`/menu/${item._id}`);    
          console.log(res.data); 
          if (res.data.deletedCount > 0) {    
            console.log(res.data);
            toast.success("Successfully Deleted!");  
            refetch();
          }
     
      }
      // const response = await fetch(`/menu/${item._id}`, {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json', 
      //   }, 
      //   body: JSON.stringify(item)
       
      // });
      // const res = await response.json();
      // if (res.data.deletedCount > 0) {    
      //         console.log(res.data);
      //         toast.success("Successfully Deleted!");  
      //         refetch();
      //       }
    });
  };
  




  return (
    <div>
      <div className="text-center">
        <p className="text-[#D99904] font-inter text-[20px] font-normal italic my-5">
          {" "}
          ---Hurry Up!---
        </p>
        <h3 className="font-inter text-[#151515] text-[40px] font-normal">
          MANAGE ALL ITEMS
        </h3>
      </div>
      <div>
        <h3 className="font-cinzel text-[#151515] text-[32px] font-bold"></h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead
            className="bg-[#D1A054] text-white mb-4"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th> 
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead> 
          <tbody>
            {menu.length > 0 ? (
              menu.map((item, index) => ( 
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
                  <td className="mb-4">   
                   <Link to={`/dashboard/updateItem/${item._id}`}>  
                   <button
                      className=" p-2 flex items-center justify-center rounded-md bg-[#D1A054] text-2xl text-white"
                    >
                     <FaEdit></FaEdit> 
                    </button>
                   </Link>
                  </td>
                  <td className="mb-4">
                    <button 
                    onClick={() => handleDeleteItem(item)} 
                      className="p-2 flex items-center justify-center rounded-md bg-[#B91C1C] text-[25px] text-white"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
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

export default ManageItems;
