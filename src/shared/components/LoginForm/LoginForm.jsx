import { Formik } from 'formik';
import { ReactComponent as OpenEyeIcon } from '../../../images/icons/eye-open.svg';
import { ReactComponent as CloseEyeIcon } from '../../../images/icons/eye-closed.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  LogInForm,
  LogInFormTitle,
  LogInFormInput,
  PasswordIcon,
  LogInBtn,
  EyeIcon,
  RegisterText,
  RegisterLink,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  // const [state, setState] = useState({ email: '', password: '' });
  // const [loading, setLoading] = useState(false);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   if (loading) {
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await dispatch(
  //       logIn({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //         // user: {
  //         //   email: form.elements.email.value,
  //         //   password: form.elements.password.value,
  //         // },
  //         // token: '',
  //       })
  //     );
  //     setState({ email: '', password: '' });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setState(prevState => {
  //     return { ...prevState, [name]: value };
  //   });
  // };

  const emailValidation = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Enter a valid Email';
    }
    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const { email, password } = state;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={emailValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <LogInForm>
          <LogInFormTitle>Log In</LogInFormTitle>
          <LogInFormInput
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <LogInFormInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            required
            right={
              <PasswordIcon onClick={togglePasswordVisibility}>
                <EyeIcon>
                  {showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
                </EyeIcon>
              </PasswordIcon>
            }
          />

          {errors.password && touched.password && <div>{errors.password}</div>}
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
