import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from 'images/icons/edit-2.svg';
import { ReactComponent as ConfirmIcon } from 'images/icons/check.svg';

import {
  FormWrapper,
  FormItem,
  FormLabel,
  EditInpuButton,
  FormInput,
  InputName,
} from './UserDataItem.styled';

const UserDataItem = ({
  label,
  name,
  isdisabled,
  handleChange,
  handleSubmit,
  handleClick,
  ...props
}) => {
  const id = useMemo(() => nanoid(), []);

  const handleActiveClick = name => {
    handleClick(name);
  };

  return (
    <FormWrapper>
      <FormItem>
        <InputName>{label}</InputName>
        <FormLabel htmlFor={id}>
          {!!isdisabled && (
            <EditInpuButton
              type="button"
              onClick={() => handleActiveClick(name)}
            >
              <EditIcon stroke="#54ADFF" style={{ width: 20, height: 20 }} />
            </EditInpuButton>
          )}
          {!isdisabled && (
            <EditInpuButton type="submit" onClick={handleSubmit}>
              <ConfirmIcon stroke="#00C3AD" style={{ width: 20, height: 20 }} />
            </EditInpuButton>
          )}
          <FormInput
            autoComplete="off"
            id={id}
            onChange={e =>
              handleChange({ target: { name, value: e.target.value } })
            }
            disabled={isdisabled}
            {...props}
          />
        </FormLabel>
      </FormItem>
    </FormWrapper>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
