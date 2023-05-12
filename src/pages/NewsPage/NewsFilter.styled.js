import styled from 'styled-components';

export const SearchComponent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  border: none;
  border-radius: 20px;

  font-size: 16px;

  padding-left: 12px;
  margin-top: 30px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media (min-width: 768px) {
    margin-top: 40px;
    min-height: 44px;
    width: 608px;
    font-size: 20px;
  }

  &:focus {
    outline: none !important;
    border: 1px solid #f5925680;
  }
  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.04em;
    color: #535353;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
