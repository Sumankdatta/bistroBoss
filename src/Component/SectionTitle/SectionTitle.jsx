

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div >
            <p className="text-center mx-auto text-yellow-400 mb-3 mt-10 border-b-4 w-72">--- {subHeading} ---</p>
            <h3 className="text-center uppercase mx-auto border-b-4 mb-10 text-2xl w-72">{heading}</h3>
        </div>
    );
};

export default SectionTitle;