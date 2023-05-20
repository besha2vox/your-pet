import RegisterForm from 'shared/components/RegisterForm/RegisterForm';
import {
  RegisterPageWrapper,
  RegisterFormWrapper,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <RegisterFormWrapper>
        <RegisterForm />
      </RegisterFormWrapper>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
