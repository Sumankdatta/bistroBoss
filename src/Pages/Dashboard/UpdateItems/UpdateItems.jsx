import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const UpdateItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [menu] = useMenu()

    console.log('update', menu)
    const handleUpdateItem = () => {


    }
    return (
        <div>
            <SectionTitle subHeading={"Update"} heading={"Update A Item"}></SectionTitle>

            < div className="bg-slate-100 mx-10 p-16" >
                <form onSubmit={handleSubmit(handleUpdateItem)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input  {...register("name", { required: "Recipe Name is required" })} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
                    </div>
                    {errors.name && <p className='text-red-500' role="alert">{errors.name.message}</p>}
                    <div className="flex my-4">
                        <div className="form-control w-full mr-5 ">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select {...register("category", { required: "Category is required" })} className="select select-bordered w-full max-w-xs">
                                <option defaultValue="salad" disabled>Select Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>drinks</option>
                                <option>dessert</option>
                                <option>soups</option>
                            </select>
                        </div>
                        {errors.category && <p className='text-red-500' role="alert">{errors.category.message}</p>}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input {...register("price", { required: "Price Name is required" })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                            {errors.price && <p className='text-red-500' role="alert">{errors.price.message}</p>}
                        </div>
                    </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: "Recipe Name is required" })} className="textarea textarea-bordered h-24" placeholder="About Recipe"></textarea>
                        {errors.recipe && <p className='text-red-500' role="alert">{errors.recipe.message}</p>}
                    </div>

                    {/* <div >
                    <input {...register("image", { required: "Image Name is required" })} className="border-0" type="file" />
                </div> */}

                    <button className=" px-6 py-3 my-5 text-xl font-semibold btn text-white bg-gradient-to-r from-[#835D23] to-[#EEAE4C]">Update A Item</button>
                </form>
            </div>





        </div >
    );
};

export default UpdateItems;