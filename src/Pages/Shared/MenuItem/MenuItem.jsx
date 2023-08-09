

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (

        <div className="flex  items-center space-x-4 w-4/5 mx-auto  p-2 rounded-md">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-20 h-20" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold " >{name} ---</h3>
                <p className="text-justify">{recipe}</p>
            </div>
            <p className="text-yellow-500  ">BDT {price}</p>

        </div>

    );
};

export default MenuItem;