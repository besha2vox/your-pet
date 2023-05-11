import { useMemo } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


const UserDataItem = ({label, handleChange, handleSubmit, ...props}) => {
    const id = useMemo(()=> nanoid(), []);

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input autoComplete={label} id={id} onChange={handleChange} {...props} />
            <button onSubmit={handleSubmit}></button>
        </div>
    )
}

export default UserDataItem;

UserDataItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};
