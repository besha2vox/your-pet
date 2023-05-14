import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import { PlusIcon, MaleIcon, FemaleIcon } from 'shared/utils/icons';
import {
  PersonalFormWrapper,
  AddFormInput,
  AddFormLabel,
} from '../PersonalForm/PersonalForm.styled';
import {
  AddFormTextArea,
  AddFormSexWrapper,
  AddFormSexLabel,
  AddFormImageWrapper,
  AddFormImageLabel,
  FileInput,
} from './MoreInfoForm.styled';
import { AddFormRadioButton } from '../ChooseForm/ChooseForm.styled';

const MoreInfo = ({ category, fileInput, setFileInput }) => {
  const handleAddAvatar = e => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
      console.log({ file });
    }
  };

  return (
    <PersonalFormWrapper>
      {category !== 'your-pet' && (
        <AddFormSexWrapper>
          <p>The Sex</p>
          <AddFormRadioButton
            type="radio"
            id="female"
            name="sex"
            value="female"
            alt="female"
          />
          <AddFormSexLabel htmlFor="female">
            <FemaleIcon stroke="#F43F5E" />
            Female
          </AddFormSexLabel>
          <AddFormRadioButton
            type="radio"
            id="male"
            name="sex"
            value="male"
            alt="male"
          />
          <AddFormSexLabel htmlFor="male">
            <MaleIcon stroke="#54ADFF" />
            Male
          </AddFormSexLabel>
        </AddFormSexWrapper>
      )}
      <AddFormImageLabel htmlFor="pet-image">
        Add photo
        <AddFormImageWrapper>
          {!fileInput && <PlusIcon width="30" height="30" />}
          {!!fileInput && (
            <img
              id="image"
              src={URL.createObjectURL(fileInput)}
              alt={fileInput.name}
            />
          )}
        </AddFormImageWrapper>
        <FileInput
          type="file"
          id="pet-image"
          name="pet-image"
          accept=".png, .jpg, .jpeg, .webp"
          onChange={handleAddAvatar}
        />
        <ErrorMessage name="pet-image" component="div" />
      </AddFormImageLabel>
      {category !== 'your-pet' && (
        <AddFormLabel htmlFor="location">
          Location
          <AddFormInput
            placeholder="Type of location"
            type="text"
            name="location"
          />
          <ErrorMessage name="location" component="div" />
        </AddFormLabel>
      )}
      {category === 'sell' && (
        <AddFormLabel htmlFor="price">
          Price
          <AddFormInput placeholder="Type of price" type="text" name="price" />
          <ErrorMessage name="price" component="div" />
        </AddFormLabel>
      )}
      <AddFormLabel htmlFor="comments">
        Comments
        <AddFormTextArea
          component="textarea"
          placeholder="Type comments"
          name="comments"
        />
        <ErrorMessage name="comments" component="div" />
      </AddFormLabel>
    </PersonalFormWrapper>
  );
};

MoreInfo.propTypes = {
  category: PropTypes.string.isRequired,
  fileInput: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  setFileInput: PropTypes.func.isRequired,
};

export default MoreInfo;
