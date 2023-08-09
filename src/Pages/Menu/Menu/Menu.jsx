import { Helmet } from "react-helmet-async";
import img from '../../../assets/menu/banner3.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import drinkImg from '../../../assets/menu/banner3.jpg'
import MenuCategory from "../ManuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Helmet>
                <title>BistroBoss | Menu</title>
            </Helmet>
            <MenuCategory title={'Our Menu'} img={img} message={'Would you like to try a dish'}></MenuCategory>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* popular */}



            {/* salad section */}
            <MenuCategory title={'salad'} img={saladImg} items={salad} message={'Our salad items is very popular try our salad'}></MenuCategory>
            {/* pizza section */}
            <MenuCategory title={'pizza'} img={pizzaImg} items={pizza} message={'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes'}></MenuCategory>
            {/* soup section */}
            <MenuCategory title={'soups'} img={soupImg} items={soup} message={'Our soup is awesome test try our soup'}></MenuCategory>
            {/* dessert */}
            <MenuCategory title={'dessert'} img={dessertImg} items={dessert} message={'Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur.'}></MenuCategory>
            <MenuCategory title={'drinks'} img={drinkImg} items={drinks} message={'Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur.'}></MenuCategory>
        </div>
    );
};

export default Menu;