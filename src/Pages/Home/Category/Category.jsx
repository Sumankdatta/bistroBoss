import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className=''>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                        spaceBetween: 10

                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img className="w-full" src={slide1} alt="" />
                    <p className='text-center text-3xl uppercase w-full text-white -mt-32'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=" w-full" src={slide2} alt="" />
                    <p className='text-center text-3xl uppercase text-white -mt-32'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={slide4} alt="" />
                    <p className='text-center text-3xl uppercase text-white -mt-32'>Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full " src={slide5} alt="" /></SwiperSlide>
                <p className='text-center text-3xl uppercase text-white -mt-32'>Salad</p>
                <SwiperSlide>
                    <img className="w-full" src={slide5} alt="" />
                    <p className='text-center text-3xl uppercase text-white -mt-32'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={slide3} alt="" />
                    <p className='text-center text-3xl uppercase text-white -mt-32'>coffee</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;