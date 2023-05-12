import { ReactComponent as LogoutIcon } from "../../../images/icons/logout.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
// import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";

const Logout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return (
        <>
        <button onClick={() => setIsModalOpen(true)}>
            <LogoutIcon stroke="#54ADFF"/>
            Log out
        </button>
        { isModalOpen && (
            <Modal toggleModal={toggleModal}>
                {/* <ModalApproveAction /> */}
            </Modal>
        )}
        </>
    )
}
export default Logout;

Logout.propTypes = {
};