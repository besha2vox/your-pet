import { ReactComponent as Pawprint } from "../../../images/icons/pawprint.svg";

const ModalCongrats = ( { toggleModal } ) => {


    return (
        <>
            
            <h1>Congrats!</h1>
            <p>Your registration is successful</p>
            <button onClick={toggleModal}>Go to profile
                <Pawprint stroke="#FEF9F9" />
            </button>
                    
        </>
    )
}

export default ModalCongrats;
