import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  FormWrapper,
  FormItem,
  FormLabel,
  EditInpuButton,
  FormInput,
  InputName,
  EditIc,
  ConfirmIcon,
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
        <FormLabel htmlFor={id}></FormLabel>
        {!!isdisabled && (
          <EditInpuButton type="button" onClick={() => handleActiveClick(name)}>
            <EditIc />
          </EditInpuButton>
        )}
        {!isdisabled && (
          <EditInpuButton type="submit" onClick={handleSubmit}>
            <ConfirmIcon />
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
      </FormItem>
    </FormWrapper>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
