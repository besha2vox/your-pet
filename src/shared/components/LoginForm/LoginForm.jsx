import { Formik } from 'formik';
import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { ReactComponent as CrossIcon } from '../../../images/icons/cross-small.svg';
import { ReactComponent as CheckIcon } from '../../../images/icons/check.svg';
import { useState } from 'react';

import {
  LogInForm,
  LogInFormTitle,
  LogInFormEmailContainer,
  LogInFormEmailInputContainer,
  LogInFormInput,
  ErrorIcon,
  LogInFormPasswordContainer,
  LogInFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  EyeIcon,
  CheckMarkIcon,
  LogInBtn,
  RegisterText,
  RegisterLink,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const fieldValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(logIn(values));
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={fieldValidation}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => (
        <LogInForm onSubmit={handleSubmit}>
          <LogInFormTitle>Log In</LogInFormTitle>
          <LogInFormEmailContainer>
            <LogInFormEmailInputContainer
              error={errors.email && touched.email}
              style={{
                borderColor:
                  errors.email && touched.email ? '#F43F5E' : '#54ADFF',
              }}
            >
              <LogInFormInput
                type="string"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && values.email && (
                <ErrorIcon
                  onClick={() => {
                    resetForm({ values: { ...values, email: '' } });
                  }}
                >
                  <CrossIcon />
                </ErrorIcon>
              )}
            </LogInFormEmailInputContainer>

            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </LogInFormEmailContainer>

          <LogInFormPasswordContainer>
            <LogInFormPasswordInputContainer
              error={errors.password && touched.password}
              style={{
                borderColor:
                  errors.password && touched.password ? '#F43F5E' : '#54ADFF',
              }}
            >
              <LogInFormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <PasswordIcon onClick={togglePasswordVisibility}>
                <EyeIcon error={errors.password && touched.password}>
                  {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </EyeIcon>

                {errors.password && touched.password && values.password && (
                  <ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, password: '' } });
                    }}
                  >
                    <CrossIcon />
                  </ErrorIcon>
                )}
              </PasswordIcon>
            </LogInFormPasswordInputContainer>

            {errors.password && touched.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </LogInFormPasswordContainer>

          <LogInBtn type="submit" disabled={isSubmitting}>
            Log In
          </LogInBtn>
          <RegisterText>
            Don't have an account? <RegisterLink href="">Register</RegisterLink>
          </RegisterText>
        </LogInForm>
      )}
    </Formik>
  );
};

export default LoginForm;
