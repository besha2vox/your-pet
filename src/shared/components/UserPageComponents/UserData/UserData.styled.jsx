import { Form } from 'formik';
import { CheckIcon, CrossIcon } from 'shared/utils/icons';
import styled from 'styled-components';

export const UserInfo = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: block;
    }
  }
`;

export const StylizedForm = styled(Form)`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) max-width: ${({ theme }) =>
      theme.breakpoints.desktop} {
    width: 182px;
  }
`;

export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[0] + 'px'};
  border-radius: 40px;
`;

export const ImageControls = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.space[0] + 'px'};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
  }
`;

export const ConfirmButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] * 5 + 'px'};
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: ${({theme}) => theme.space[1] * 7 + 'px'};
  border: none;
  padding-top:${({theme}) => theme.space[0] + 'px'};
  padding-right: 5px;
  padding-bottom:${({theme}) => theme.space[0] + 'px'};
  padding-right: 5px;
  border-radius: 20px;
  background: transparent;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.83;
  letter-spacing: 0.04em;
  box-shadow: none;
  transition: 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadows.main};
  }
`;

export const Cross = styled(CrossIcon)`
  color: ${({ theme }) => theme.colors.red};
  margin-right: ${({ theme }) => theme.space[3] + 'px'};
`;

export const Check = styled(CheckIcon)`
  color: ${({ theme }) => theme.colors.green};
  margin-right: ${({ theme }) => theme.space[3] + 'px'};
`;
