import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    return (
        <section className="w-full">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our menu"}
            ></SectionTitle>
            <div className="lg:grid grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="w-full text-center mt-10">
                <button className="btn btn-outline border-0 border-b-4 uppercase ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;