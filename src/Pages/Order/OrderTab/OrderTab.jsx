import FoodCart from "../../Shared/FoodCart/FoodCart";


const OrderTab = ({ items }) => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 w-4/5 mx-auto'>
            {
                items.map(item => <FoodCart
                    key={item._id}
                    item={item}
                ></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;