import { Field } from 'formik';
import styled from 'styled-components';

export const RegisterFormEl = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterFormTitle = styled.h1`
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

export const RegisterFormUsernamelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const RegisterFormUsernameInputContainer = styled.div`
  display: flex;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const RegisterFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const RegisterFormEmailInputContainer = styled.div`
  display: flex;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const RegisterFormInput = styled(Field)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`;

export const RegisterFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 32px;
`;

export const RegisterFormPasswordInputContainer = styled.div`
  display: flex;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const ErrorMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red};
`;

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const RegisterBtn = styled.button`
  margin-top: 28px;
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
    margin-top: 48px;
    margin-bottom: 24px;
  }
`;

export const LoginText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LoginLink = styled.a`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
  display: inline;
`;

export const ErrorIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
`;
