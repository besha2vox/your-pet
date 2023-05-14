import styled from 'styled-components';
import { Field } from 'formik';

export const PersonalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0 24px;
  gap: 20px;
`;

export const AddFormLabel = styled.label`
  display: inherit;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const AddFormInput = styled(Field)`
  padding: 10px 16px;

  font-size: 14px;
  line-height: 1.5;

  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  outline-color: ${({ theme }) => theme.colors.blue};
  transition: outline 300ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
