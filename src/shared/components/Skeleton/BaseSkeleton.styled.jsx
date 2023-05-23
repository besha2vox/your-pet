import styled, { keyframes } from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const gradient = keyframes`
0%{
  background-position: 0 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0 50%;
}
`;

const BaseSkeleton = styled(Skeleton)`
  display: flex;

  background: linear-gradient(290.46deg, #c3e0f9 0%, #b3b3b3 107.89%);
  background-size: 300% 300%;

  animation: ${gradient} 1s ease infinite;

  overflow: hidden;
`;

export { BaseSkeleton };
