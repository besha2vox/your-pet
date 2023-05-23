import {
  useState,
  // useEffect
} from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeUser } from 'redux/auth/operations';
import avatarDefault2x from 'images/profile_img/Photo_default_2x.jpg';
// import avatarDefault1x from "images/profile_img/Photo_default_1x.jpg";
// import avatarDefault3x from "/images/profile_img/Photo_default_3x.jpg";
import { ReactComponent as Camera } from 'images/icons/camera.svg';
import UserDataForm from '../UserDataForm/UserDataForm';
import {
  UserInfo,
  StylizedForm,
  Avatar,
  EditButton,
  ConfirmButtonWrap,
  ImageControls,
  Cross,
  Check,
} from './UserData.styled';

const UserData = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [petPhoto, setFileInput] = useState('');
  const dispatch = useDispatch();

  const initialValues = {
    petPhoto: user.avatarURL || avatarDefault2x,
  };

  const handleAddAvatar = e => {
    setEdit(false);
    setFileInput(false);
    const newFormData = new FormData();
    newFormData.append('pets-photo', petPhoto);
    dispatch(changeUser(newFormData));
  };

  const handleCancelAvatar = e => {
    setFileInput();
    setEdit(false);
  };

  const handleClickInput = e => {
    setEdit(true);
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  const handleEditBtn = () => {
    document.getElementById('petPhoto').click();
  };

  const handleChangeData = (data) => {
    const updatedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (value !== '') {
          if (key === 'birthday') {
            return [key, new Date(value).toLocaleDateString('uk-UA', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })];
          }
          return [key, value];
        }
        return null;
      }).filter(Boolean)
    );
    dispatch(changeUser(updatedData));
  };

  return (
    <>
      <UserInfo>
        <Formik initialValues={initialValues}>
          {({ setFieldValue }) => (
            <StylizedForm>
              <label htmlFor="petPhoto">
                {!petPhoto && !user.avatarURL && (
                  <Avatar src={avatarDefault2x} alt="user avatar" />
                )}
                {!petPhoto && user.avatarURL && (
                  <Avatar src={user.avatarURL} alt="user avatar" />
                )}
                {!!petPhoto && (
                  <Avatar
                    src={URL.createObjectURL(petPhoto)}
                    id="image"
                    alt={petPhoto.username}
                  />
                )}
                <Field name="fileInput">
                  {({ field }) => (
                    <Field
                      type="file"
                      id="petPhoto"
                      name="petPhoto"
                      accept=".png, .jpg, .jpeg, .webp"
                      hidden
                      value=""
                      onChange={handleClickInput}
                    />
                  )}
                </Field>
                <ErrorMessage name="user-avatar" component="div" />
              </label>
              <ImageControls>
                {edit && petPhoto ? (
                  <ConfirmButtonWrap>
                    <EditButton type="button" onClick={handleAddAvatar}>
                      <Check stroke="#00C3AD"/>
                      Confirm
                    </EditButton>
                    <EditButton type="button" onClick={handleCancelAvatar}>
                      <Cross />
                      Cancel
                    </EditButton>
                  </ConfirmButtonWrap>
                ) : (
                  <EditButton type="button" onClick={handleEditBtn}>
                    <Camera stroke="#54ADFF" style={{ marginRight: 8 }} />
                    Edit photo
                  </EditButton>
                )}
              </ImageControls>
            </StylizedForm>
          )}
        </Formik>
        <UserDataForm onSubmit={handleChangeData} user={user} />
      </UserInfo>
    </>
  );
};

export default UserData;

UserData.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
  }),
};
