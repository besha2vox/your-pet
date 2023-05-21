import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] + 'px'};

  max-height: 32px;

  padding-top: ${({ theme }) => theme.space[3] + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] + 'px'};
  padding-left: ${({ theme }) => theme.space[4] + 'px'};
  padding-right: ${({ theme }) => theme.space[4] + 'px'};

  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.blue};
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};

    transition: stroke 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export { Wrapper, Text, Btn };
