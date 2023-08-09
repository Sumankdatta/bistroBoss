import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShafService from "../ShafSection/ShafService";
import TestiMonials from "../Testimonials/TestiMonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>BistroBoss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ShafService></ShafService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;