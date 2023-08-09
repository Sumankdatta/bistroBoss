

const FoodCart = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card w-76 mt-10 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-black text-white absolute right-5 rounded-md top-5 py-1 px-2">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions flex flex-col items-center">
                        <button className="btn btn-outline border-0 bg-gray-200 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;