import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from 'shared/components/Logout/Logout';
import { useState, useEffect } from 'react';
import fields from './fields';
import useForm from '../../hooks/useForm';
import { UserForm } from './UserDataForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const UserDataForm = ({ onSubmit }) => {
  const user = useSelector(selectUser);

  const initialState = {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, birthday, phone, city } = state;

  const [nameIsActive, setNameIsActive] = useState(true);
  const [emailIsActive, setEmailIsActive] = useState(true);
  const [birthdayIsActive, setBirthdayIsActive] = useState(true);
  const [phoneIsActive, setPhoneIsActive] = useState(true);
  const [cityIsActive, setCityIsActive] = useState(true);

  useEffect(() => {
    if (user) {
      setNameIsActive(true);
      setEmailIsActive(true);
      setBirthdayIsActive(true);
      setPhoneIsActive(true);
      setCityIsActive(true);
    }
  }, [user]);

  const countActiveButtons = () => {
    let count = 0;
    if (nameIsActive) count++;
    if (emailIsActive) count++;
    if (birthdayIsActive) count++;
    if (phoneIsActive) count++;
    if (cityIsActive) count++;

    if (count === 5) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = name => {
    if (countActiveButtons()) {
      switch (name) {
        case 'name':
          setNameIsActive(false);
          break;
        case 'email':
          setEmailIsActive(false);
          break;
        case 'birthday':
          setBirthdayIsActive(false);
          break;
        case 'phone':
          setPhoneIsActive(false);
          break;
        case 'city':
          setCityIsActive(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Formik initialValues={initialState} validationSchema={validationSchema}>
      <UserForm>
        <UserDataItem
          value={name}
          handleChange={handleChange}
          {...fields.name}
          name="name"
          isdisabled={nameIsActive}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          value={email}
          handleChange={handleChange}
          {...fields.email}
          name="email"
          isdisabled={emailIsActive}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          value={birthday}
          handleChange={handleChange}
          {...fields.birthday}
          name="birthday"
          isdisabled={birthdayIsActive}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />

        <UserDataItem
          value={phone}
          handleChange={handleChange}
          {...fields.phone}
          name="phone"
          isdisabled={phoneIsActive}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
        <UserDataItem
          value={city}
          handleChange={handleChange}
          {...fields.city}
          name="city"
          isdisabled={cityIsActive}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </UserForm>
    </Formik>
  );
};

export default UserDataForm;
