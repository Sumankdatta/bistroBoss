

const Cover = ({ img, title, message }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='lg:p-24 px-12 py-24 bg-cover bg-center' >
            <div className='text-white text-center mx-auto uppercase lg:px-24 lg:py-20 px-8 py-8 lg:w-3/5  bg-black bg-opacity-50'>
                <h3 className=' lg:text-5xl text-3xl lg:mb-5'>{title}</h3>
                <p><small>{message}</small></p>
            </div>
        </div>
    );
};

export default Cover;