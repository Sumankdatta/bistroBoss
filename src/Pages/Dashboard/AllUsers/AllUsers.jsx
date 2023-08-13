import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allUsers, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(res.data)
            return res.data
        }
    })
    console.log(allUsers)

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    refetch()
                    toast.success('Make admin successfully')
                }

            })
    }

    return (
        <div>
            <SectionTitle subHeading={'Total Users'} heading={"Mange all users"}></SectionTitle>
            <div className="bg-slate-100 p-10">
                {/* <div className="uppercase flex user-center justify-between font-semibold text-2xl">
                    <h2 >Total Order :{cart?.length}</h2>
                    <h2>Total Price : ${total}</h2>
                    <button className="btn btn-sm bg-[#D1A054]">Pay</button>
                </div> */}
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        <thead>
                            <tr className="uppercase bg-[#D1A054]">
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name} </td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user?.role === "admin" ?
                                            <p className="text-blue-500 font-semibold">Admin</p>
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-orange-500 text-white"> <FaUsers></FaUsers></button>}

                                    </td>
                                    <td>

                                        <button className="btn btn-sm bg-red-500 text-white"> <FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AllUsers;