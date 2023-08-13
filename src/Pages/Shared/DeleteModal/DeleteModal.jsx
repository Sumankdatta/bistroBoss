

const DeleteModal = ({ handleDelete, deletedItem, setDeletedItem, message, title }) => {
    return (
        <div>

            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}


            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => setDeletedItem(null)} htmlFor="my_modal_6" className="btn">Cancel</label>
                        <label onClick={() => handleDelete(deletedItem)} htmlFor="my_modal_6" className="btn">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;