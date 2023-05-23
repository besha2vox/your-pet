import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { ReactComponent as CrossIcon } from '../../../images/icons/cross-small.svg';

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
  LoginErrorMessage,
  LogInBtn,
  RegisterText,
  RegisterLink,
} from './LoginForm.styled';

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
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginError = useSelector(selectError);

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
      if (!loginError) {
        navigate('/');
      }
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
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => {
        const handleFieldChange = e => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: '' }); // Clear the error for the specific field
          handleChange(e);
        };

        return (
          <LogInForm onSubmit={handleSubmit}>
            <LogInFormTitle>Log In</LogInFormTitle>
            <LogInFormEmailContainer error={errors.email && touched.email}>
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
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
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
                <ErrorMessage name="email">{errors.email}</ErrorMessage>
              )}
            </LogInFormEmailContainer>

            <LogInFormPasswordContainer
              error={errors.password && touched.password}
            >
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
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  <EyeIcon error={errors.password && touched.password}>
                    {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </EyeIcon>
                </PasswordIcon>
              </LogInFormPasswordInputContainer>

              {errors.password && touched.password && (
                <ErrorMessage name="password">{errors.password}</ErrorMessage>
              )}
            </LogInFormPasswordContainer>

            {loginError && (
              <LoginErrorMessage>{loginError.message}</LoginErrorMessage>
            )}

            <LogInBtn type="submit" disabled={isSubmitting || loading}>
              Log In
            </LogInBtn>
            <RegisterText>
              Don't have an account?{' '}
              <RegisterLink
                onClick={() => {
                  navigate('/register');
                }}
              >
                Register
              </RegisterLink>
            </RegisterText>
          </LogInForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
