import styled from 'styled-components';

const Form = styled.form`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: ${({ theme }) => theme.space[3] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    margin-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
  }
`;

const Input = styled.input`
  width: 100%;
  max-height: 44px;
  padding-top: ${({ theme }) => theme.space[2] * 3 + 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] * 3 + 1 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};

  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: #888888;

  background-color: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  outline: none;

  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};

  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.secondary.regular};
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transform: ${({ query }) => query && 'translateX(-27px)'};

  transition: transform 300ms ${({ theme }) => theme.transition.main};

  & svg {
    fill: ${({ theme }) => theme.colors.blue};
  }
`;

const CleareUpBtn = styled(SubmitBtn)`
  right: 13px;

  transform: translateX(0);
  opacity: ${({ query }) => (query ? 1 : 0)};

  transition: opacity 300ms ${({ theme }) => theme.transition.main};

  & svg {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export { Form, Input, CleareUpBtn, SubmitBtn };
