import styled from 'styled-components';

export const AddFormModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 20px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main.meddium};
  font-size: ${({ theme }) => theme.fontSizes[3]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 32px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
