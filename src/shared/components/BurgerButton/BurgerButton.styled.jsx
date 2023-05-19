import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.space[2] * 3 + 'px'};

  z-index: 5;
`;

export { Wrapper };
