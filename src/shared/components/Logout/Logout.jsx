import { ReactComponent as LogoutIcon } from "../../../images/icons/logout.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalApproveAction from "../UserPageComponents/ModalApproveAction/ModalApproveAction";
// import { useDispatch } from "react";
// import { logOut } from "../../../redux/auth/operations";

const Logout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const dispatch = useDispatch();

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const handlerClick = () => {
    //     dispatch(logOut())
        console.log("Delete");
    }

    return (
        <>
        <button onClick={() => setIsModalOpen(true)}>
            <LogoutIcon stroke="#54ADFF"/>
            Log out
        </button>
        { isModalOpen && (
            <Modal toggleModal={toggleModal}>
                <ModalApproveAction toggleModal={toggleModal} type="button" clickHandler={handlerClick} icon={<LogoutIcon stroke="#FEF9F9"/>}>
                    Are you leaving?
                </ModalApproveAction>
            </Modal>
        )}
        </>
    )
}
export default Logout;

Logout.propTypes = {
};