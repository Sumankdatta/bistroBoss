import { Helmet } from "react-helmet-async";
import useCarts from "../../../hooks/useCarts";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    // const [deletedItem, setDeletedItem] = useState(null)

    const [carts, refetch, isLoading] = useCarts()
    const total = carts?.reduce((sum, item) => sum + item?.price, 0)


    const handleDelete = (item) => {

        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "If You delete you won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            console.log(data)
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

    if (isLoading) {
        return <p>ppppp</p>
    }
    return (
        <div className="ms-10">
            <Helmet>
                <title>BistroBoss | My Cart</title>
            </Helmet>
            <SectionTitle subHeading={'My Cart'} heading={"wanna add more"}></SectionTitle>
            <div className="bg-slate-100 p-10">
                <div className="uppercase flex item-center justify-between font-semibold text-2xl">
                    <h2 >Total Order :{carts?.length}</h2>
                    <h2>Total Price : ${total}</h2>
                    <button className="btn btn-sm bg-[#D1A054]">Pay</button>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        <thead>
                            <tr className="uppercase bg-[#D1A054]">
                                <th>No</th>
                                <th>ITEM IMAGE</th>
                                <th>item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.length === 0 && <h3 className="text-2xl font-semibold">You have no product please buy something
                                <Link to='/order/salad'>Order Food</Link>
                            </h3>}
                            {
                                carts?.map((item, i) => <tr key={item._id}>
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

                                        <button onClick={() => handleDelete(item)} htmlFor="my_modal_6" className="btn btn-sm bg-red-500 text-white"> <FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>

                </div>
                {/* {
                    deletedItem &&
                    <DeleteModal
                        refetch={refetch}
                        handleDelete={handleDelete}
                        deletedItem={deletedItem}
                        setDeletedItem={setDeletedItem}
                        title={'Are you sure you want to delete??'}
                        message={'If you delete you can not data back'}
                    ></DeleteModal>
                } */}

            </div>

        </div>
    );
};

export default MyCart;