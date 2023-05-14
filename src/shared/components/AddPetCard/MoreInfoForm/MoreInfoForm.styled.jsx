import styled from 'styled-components';
import { Field } from 'formik';
import {
  AddFormInput,
  AddFormLabel,
} from '../PersonalForm/PersonalForm.styled';
import { AddFormRadioButton } from '../ChooseForm/ChooseForm.styled';
import { visualyHidden } from 'shared/utils/visualyHidden';

export const FileInput = styled(Field)`
  ${visualyHidden}
`;

export const AddFormTextArea = styled(AddFormInput)`
  resize: none;
  height: 92;

  @media screen and (min-width: 768px) {
    height: 108px;
  }
`;

export const AddFormSexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 16px;

  & p {
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;

    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.3;
    }
  }
`;

export const AddFormSexLabel = styled.label`
  display: flex;
  column-count: 12px;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: #888888;

  cursor: pointer;
  transition: color 300ms ${({ theme }) => theme.transition.main};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  ${AddFormRadioButton}:checked + & {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AddFormImageLabel = styled(AddFormLabel)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 28px;
`;

export const AddFormImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.blue};

  cursor: pointer;
  overflow: hidden;
  object-fit: cover;

  & svg {
    stroke: currentColor;
  }
`;
