import LoginForm from 'shared/components/LoginForm/LoginForm';
import { LoginFormWrapper, LogInPage } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LogInPage>
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </LogInPage>
  );
};

export default LoginPage;
