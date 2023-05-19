import styled from 'styled-components';

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px;
  width: 100%;
  min-height: 496px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 20px 32px;
    width: fit-content;
    min-width: 458px;
  }
`;
