import UserDataItem from '../UserDataItem/UserDataItem';
import useForm from "../hooks/useForm";
import fields from "./fields";
import avatarDefault2x from "../../../images/profile_img/Photo_default_2x.jpg";
// import avatarDefault1x from "../../../images/profile_img/Photo_default_1x.jpg";
// import avatarDefault3x from "../../../images/profile_img/Photo_default_3x.jpg";
import { ReactComponent as Camera } from "../../../images/icons/camera.svg";
import { ReactComponent as Check } from "../../../images/icons/check.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// const validationSchema = yup.object({
//   name: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required('Name is required')
// });

const initialState = {
    name: "",
    email: "",
    birthday: "",
    phone: "",
    city: "",
}

const UserData = () => {
    const {state, handleChange} = useForm({initialState});
    const {name, email, birthday, phone, city } = state;

    const handleSubmit = (data) => {
    // dispatch(signup(data));
}
return (
    <>
        <div>
            <img src={avatarDefault2x} alt="user avatar" width="182" height="182" />
            <div>
                <Camera stroke="#54ADFF"/>
                <button>Edit photo</button>
            </div>
            <div>
                <Check stroke="#54ADFF"/>
                <button>Confirm</button>
            </div>
        </div>
        <div>
            <UserDataItem value={name} handleChange={handleChange} {...fields.name} onSubmit={handleSubmit} />
            <UserDataItem value={email} handleChange={handleChange} {...fields.email} onSubmit={handleSubmit} />
            <UserDataItem value={birthday} handleChange={handleChange} {...fields.birthday} onSubmit={handleSubmit} />
            <UserDataItem value={phone} handleChange={handleChange} {...fields.phone} onSubmit={handleSubmit} />
            <UserDataItem value={city} handleChange={handleChange} {...fields.city} onSubmit={handleSubmit} />
        </div>
    </>
);
};


export default UserData;