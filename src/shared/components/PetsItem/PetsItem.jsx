import { ReactComponent as DeletePet } from "../../../images/icons/trash-2.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
// import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";


const PetsItem = ({ pet  } ) => {
    // name, birthday, breed, avatarURL, comments
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return ( 
    <>
        <li> 
            <img src={pet.avatarURL} alt="mypet's avatar" width="240" height="240" />
            <p>{pet.name}</p>
            <p>{pet.birthday}</p>
            <p>{pet.breed}</p>
            <p>{pet.comments}</p>
            <button onClick={() => setIsModalOpen(true)}>
                <DeletePet stroke="#54ADFF"/>
            </button>
        </li>
        { isModalOpen && (
            <Modal toggleModal={toggleModal}>
                {/* <ModalApproveAction id={pet._id}/> */}
            </Modal>
        )}
    </>
    )  
};

export default PetsItem;