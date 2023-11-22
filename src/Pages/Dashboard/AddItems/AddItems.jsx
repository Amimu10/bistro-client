

import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../component/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"; 
import useAxiosSecure from "../../../Hooks/useAxiosSecure"; 
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const AddItems = () => {
  const { register, handleSubmit } = useForm(); 
  const axiosPublic = useAxiosPublic();  
  const axiosSecure = useAxiosSecure(); 
  const onSubmit = async (data) => {
    console.log(data); 

    // image upload to imagebb and then get an url 
     const imageFile = {image: data.image[0]}; 
     const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          'Content-Type':'multipart/form-data'  
        } 
     });
     if(res.data.success){
        // now send the menu item to the server with the image url
         const menuItem = {
             name: data.name,
             category: data.category,
             price : parseFloat(data.price),
             recipe: data.recipe,
             image: res.data.data.display_url 
         }
        //  
        const menuRes = await axiosSecure.post("/menu", menuItem); 
        console.log(menuRes.data); 
        if(menuRes.data.insertedId){  
          // show success message 
          toast.success(`${data.name} is added successfully!`, { duration: 3000 }); 
        } 
     }
     console.log(res.data);
  }

  return (
    <div>
      <SectionTitle
        heading="Add AN ITEM"
        subHeading="Whats new?"
      ></SectionTitle> 
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input {...register("name", { required: true})} 
            required 
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full"> 
              <label className="label"> 
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue="default"
                {...register("category", { required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default"> 
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input {...register("price", { required: true})}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div> 
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label> 
            <textarea {...register("recipe", { required: true})} 
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details*"
            ></textarea> 
          </div> 
          <div> 
            <input {...register("image", { required: true})} 
              type="file"
              className="file-input file-input-bordered w-full max-w-xs my-6 "
            />
          </div>
          <button 
            type="submit"
            className="font-inter text-base  text-white p-2 w-[180px] rounded-md mb-8 btn capitalize "
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
          >
            Add Item <FaUtensils className="ml-2" /> 
          </button> 
        </form>
      </div>
    </div>
  );
};

export default AddItems;
