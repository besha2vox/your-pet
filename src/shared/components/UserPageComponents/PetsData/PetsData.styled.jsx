import styled from 'styled-components';

export const PetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  margin-right: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
  margin-left: ${({ theme }) => theme.space[0] + 'px'};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
    margin-right: ${({ theme }) => theme.space[0] + 'px'};
    margin-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
    margin-left: ${({ theme }) => theme.space[0] + 'px'};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.space[2] * 15 + 'px'};
    margin-right: ${({ theme }) => theme.space[0] + 'px'};
    margin-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
    margin-left: ${({ theme }) => theme.space[0] + 'px'};
  }
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const NoPetsMessageWrapper = styled.div`
  margin-top: 20px;
  padding-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] * 5 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};

  font-weight: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    text-align: center;
  }
`;
