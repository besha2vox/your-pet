import { useState } from 'react';
import avatarDefault2x from 'images/profile_img/Photo_default_2x.jpg';
// import avatarDefault1x from "images/profile_img/Photo_default_1x.jpg";
// import avatarDefault3x from "/images/profile_img/Photo_default_3x.jpg";
import { ReactComponent as Camera } from 'images/icons/camera.svg';
import { ReactComponent as Check } from 'images/icons/check.svg';
import { ReactComponent as Cross } from 'images/icons/cross-small.svg';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataForm from '../UserDataForm/UserDataForm';
import {
  UserInfo,
  Avatar,
  EditButton,
  ConfirmButtonWrap,
  ImageControls,
} from './UserData.styled';

const UserData = () => {
  const [edit, setEdit] = useState(false);
  const [fileInput, setFileInput] = useState('');

  const { userImage } = useSelector(selectUser);

  const initialValues = { fileInput: userImage || avatarDefault2x };

  const handleAddAvatar = e => {
    console.log(fileInput);
    //   // диспатч и очистка
    // setFileInput(false);
    setEdit(false);
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
      // console.log({ file });
    }
  };

  const handleEditBtn = () => {
    document.getElementById('my-file-input').click();
  };

  const handleChangeData = data => {
    const updatedData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== '')
    );
    // dispatch({ type: 'MY_ACTION', payload: state });
    console.log(updatedData);
  };

  return (
    <>
      <UserInfo>
        <Formik initialValues={initialValues}>
          {({ setFieldValue }) => (
            <Form>
              <label htmlFor="my-file-input">
                {!fileInput && !userImage && (
                  <Avatar src={avatarDefault2x} alt="user avatar" />
                )}
                {!fileInput && userImage && (
                  <Avatar src={userImage} alt="user avatar" />
                )}
                {!!fileInput && (
                  <Avatar
                    id="image"
                    src={URL.createObjectURL(fileInput)}
                    alt={fileInput.name}
                  />
                )}
                <div>
                  <Field name="fileInput">
                    {({ field }) => (
                      <Field
                        type="file"
                        id="my-file-input"
                        name="fileInput"
                        accept=".png, .jpg, .jpeg, .webp"
                        hidden
                        value=""
                        onChange={handleClickInput}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="user-avatar" component="div" />
                </div>
              </label>
              <ImageControls>
                {edit && fileInput ? (
                  <ConfirmButtonWrap>
                    <EditButton type="button" onClick={handleAddAvatar}>
                      <Check stroke="#54ADFF" style={{ marginRight: 8 }} />
                      Confirm
                    </EditButton>
                    <EditButton type="button" onClick={handleCancelAvatar}>
                      <Cross stroke="#F43F5E" style={{ marginRight: 8 }} />
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
            </Form>
          )}
        </Formik>
        <UserDataForm onSubmit={handleChangeData} />
      </UserInfo>
    </>
  );
};

export default UserData;
