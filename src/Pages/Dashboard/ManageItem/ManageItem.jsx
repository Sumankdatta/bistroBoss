import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    // console.log('jamte hai ', menu?.name)

    const handleMenuDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't Delete ${item.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {

                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="">
            <SectionTitle subHeading={"Admin Work"} heading={"MAnage All Items"}></SectionTitle>

            <div className="overflow-x-auto mt-5 mx-10 bg-slate-100 px-5">
                <h2 className="text-3xl font-semibold my-5">Total items {menu?.length}</h2>
                <table className="table">
                    <thead>
                        <tr className="uppercase bg-[#D1A054]">
                            <th>No</th>
                            <th>ITEM IMAGE</th>
                            <th>item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={item.image} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>

                                    <Link to={`/dashboard/updateitem/${item._id}`}> <button className="btn btn-sm bg-[#D1A054] text-white"> <FaEdit></FaEdit></button></Link>
                                </td>
                                <td>

                                    <button onClick={() => handleMenuDelete(item)} className="btn btn-sm bg-red-500 text-white"> <FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageItem;