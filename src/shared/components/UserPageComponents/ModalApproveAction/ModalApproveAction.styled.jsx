import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-width: calc(100vw - 40px);
  height: 287px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 440px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 608px;
    height: 354px;
  }
`;
export const Header = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  margin-bottom: ${({ theme }) => theme.space[4] * 3 + 'px'};
  padding: ${({ theme }) => theme.space[2] * 5 + 'px'};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > :first-child {
    margin-right: 17px;
  }
`;
