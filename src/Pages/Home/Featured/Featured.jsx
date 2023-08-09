import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured mt-16 bg-fixed text-white'>
            <div className='bg-black bg-opacity-50 pt-5 pb-16'>
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"From Our Menu"}
                ></SectionTitle>
                <div className='lg:flex justify-center items-center flex-cols mx-auto mt-5 w-4/5'>
                    <img className='w-96' src={featured} alt="" />
                    <div>
                        <p className='text-white ms-5'>March 20,2023</p>
                        <h3 className='text-xl ext-justify ms-5 text-white'>WHERE CAN I GET SOME</h3>
                        <p className='text-justify ms-5 text-white'>Restaurant means an eating establishment, including but not limited to, coffee shops, cafeterias, sandwich stands, and private and public school cafeterias, which gives or offers for sale food to the public, guests, or employees, as well as kitchens and catering facilities in which food is prepared on the premises for serving elsewhere. The term “restaurant” shall include a bar area within the restaurant.</p>
                        <button className='btn btn-outline ms-5 mt-5 border-0 border-b-4 text-center'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;