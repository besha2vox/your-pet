import styled from 'styled-components';

export const UserInfo = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 71px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: block;
    }
  }
`;

export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  margin: 0 auto;
  border-radius: 40px;
  border: 2px solid tomato;
  background-size: cover;
`;

export const ImageControls = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
`;

export const ConfirmButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 14px;
  border: none;
  background: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
`;
