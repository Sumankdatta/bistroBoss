import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCart = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user?.uid) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        Swal.fire({
            title: 'Login first',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/login", { state: { from: location } })
            }
        })

    }

    return (
        <div>
            <div className="card w-76 mt-10 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-black text-white absolute right-5 rounded-md top-5 py-1 px-2">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions flex flex-col items-center">
                        <button onClick={() => handleAddToCart(_id)} className="btn btn-outline border-0 bg-gray-200 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;