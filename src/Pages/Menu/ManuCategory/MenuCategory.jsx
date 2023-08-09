import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img, message }) => {
    return (
        <section className="mb-10">
            {title && <Cover title={title} img={img} message={message}></Cover>}
            <div className="lg:grid grid-cols-2 gap-6 mt-20">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            {
                items &&
                <div className="text-center mb-10">
                    <Link to={`/order/${title}`}> <button className='btn btn-outline ms-5 mt-5 border-0 border-b-4 text-center'>Order Our Favourite Food</button></Link>
                </div>
            }
        </section>
    );
};

export default MenuCategory;