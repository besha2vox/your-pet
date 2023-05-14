import styled from 'styled-components';
import { Field } from 'formik';
import { visualyHidden } from 'shared/utils/visualyHidden';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const AddFormRadioButton = styled(Field)`
  ${visualyHidden}
`;

export const RadioCategoryLabel = styled.label`
  padding: 8px 16px;

  width: fit-content;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  cursor: pointer;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus,
  ${AddFormRadioButton}:checked + & {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
