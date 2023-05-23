import { CheckIcon, EditIcon } from 'shared/utils/icons';
import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const FormItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2] * 3 + 'px'};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: ${({ theme }) => theme.space[3] + 'px'};
    }
  }
`;

export const FormLabel = styled.label``;

export const EditIc = styled(EditIcon)`
  stroke: ${({ theme }) => theme.colors.blue};
  fill: ${({ theme }) => theme.colors.blue};
  width: ${({ theme }) => theme.space[2] * 5 + 'px'};
  height: ${({ theme }) => theme.space[2] * 5 + 'px'};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.space[2] * 6 + 'px'};
    height: ${({ theme }) => theme.space[2] * 6 + 'px'};
  }
`;
export const ConfirmIcon = styled(CheckIcon)`
  color: ${({ theme }) => theme.colors.green};
  width: ${({ theme }) => theme.space[2] * 5 + 'px'};
  height: ${({ theme }) => theme.space[2] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.space[2] * 6 + 'px'};
    height: ${({ theme }) => theme.space[2] * 6 + 'px'};
  }
`;

export const EditInpuButton = styled.button`
  position: absolute;
  overflow: visible;
  right: ${({ theme }) => theme.space[2] * 3 + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[0] + 'px'};
  margin: ${({ theme }) => theme.space[0] + 'px'};
  background: transparent;
  border: none;

  ${ConfirmIcon} {
    stroke: ${({ disabled }) => (disabled ? '#888888' : '#00C3AD')};
  }
`;

export const FormInput = styled(Field)`
  width: calc(100vw - 40vw);
  height: ${({ theme }) => theme.space[2] * 7 + 'px'};
  padding-top: ${({ theme }) => theme.space[2] + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 3 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 3 + 'px'};
  background: transparent;
  outline: none;
  border: 1px solid #54adff;
  border-radius: 20px;

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 320px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 255px;
    height: ${({ theme }) => theme.space[5] + 'px'};
  }
  ${({ touched, error }) =>
    touched &&
    error &&
    css`
      border: 1px solid #f43f5e;
    `}
  &::-webkit-calendar-picker-indicator {
    color: #111111;
    font-size: 15px;
    padding: 2px;
    margin-right: 25px;
  }
  &::-webkit-datetime-edit {
    color: #111111;
    padding: 2px;
  }
`;

export const InputName = styled.span`
  min-width: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
  display: block;
  color: ${({ theme }) => theme.colors.red};
  margin-left: 110px;
  margin-top: -30px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;
