import {
  useMemo,
  // useState
} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import {
  FormWrapper,
  FormItem,
  FormLabel,
  EditInpuButton,
  FormInput,
  InputName,
  EditIc,
  ConfirmIcon,
  ErrorContainer,
} from './UserDataItem.styled';

const UserDataItem = ({
  label,
  name,
  value,
  isdisabled,
  handleClick,
  formik,
  formErrors,
  setFormErrors,
  onSubmit,
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
          <EditInpuButton type="button" disabled={!formik.isValid} onClick={() => onSubmit(formik.values, name)}>
            <ConfirmIcon stroke="#00C3AD"/>
          </EditInpuButton>
        )}
        <FormInput
          autoComplete="off"
          id={id}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          disabled={isdisabled}
          touched={formik.touched[name] ? formik.touched[name].toString() : ""}
          error={formik.errors[name]}
          {...props}
        />
        <ErrorMessage name={name}>
          {msg => <ErrorContainer>{formErrors[name] || msg}</ErrorContainer>}
        </ErrorMessage>
      </FormItem>
    </FormWrapper>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  isdisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
  formErrors: PropTypes.object,
  setFormErrors: PropTypes.func,
};
