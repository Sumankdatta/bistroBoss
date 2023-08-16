import img from '../../assets/others/cupcake-dribbble.gif'

const Secrect = () => {
    return (
        <div>
            <div className="loading-screen">
                <div className="spinner">
                    <img src={img} alt="" />
                </div>
                {/* You can add more loading indicators or messages here */}
            </div>
        </div>
    );
};

export default Secrect;