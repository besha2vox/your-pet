import { Field } from 'formik';
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

export const LogInFormInput = styled(Field)`
  padding: 12px 16px;
  margin-bottom: 32px;

  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    outline: none;
  }
  у @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const LogInBtn = styled.button`
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
    margin-top: 56px;
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

export const RegisterLink = styled.a`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
  display: inline;
`;
