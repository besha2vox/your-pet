import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogInForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInFormTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`;

export const LogInFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const LogInFormEmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const LogInFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const LogInFormPasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const LogInFormInput = styled(Field)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`;

export const ErrorIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme }) => theme.colors.red};
  }
`;

export const ErrorMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red};
`;

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme, error }) =>
      error ? theme.colors.red : theme.colors.blue};
  }
`;

export const LoginErrorMessage = styled.div`
  padding: 15px 16px 0 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export const LogInBtn = styled.button`
  margin-top: 13px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`;

export const RegisterText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const RegisterLink = styled(Link)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
  display: inline;
  cursor: pointer;
`;
