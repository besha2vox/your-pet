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

export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  margin-top: ${({ theme }) => theme.space[0] + 'px'};
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.space[0] + 'px'};
  margin-left: auto;
  border-radius: 40px;
  background-size: cover;
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
  gap: ${({ theme }) => theme.space[1] * 7 + 'px'};
  border: none;
  background: transparent;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.83;
  letter-spacing: 0.04em;
`;
