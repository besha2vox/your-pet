import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.space[2] * 3 + 'px'};

  z-index: 100;
`;

export { Wrapper };
