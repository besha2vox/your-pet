import styled from 'styled-components';

export const LogInPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;

  @media screen and (max-width: 767px) {
    padding-top: 44px;
  }
`;

export const LoginFormWrapper = styled.div`
  padding: 60px 75px;
  width: 608px;
  min-height: 481px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;
