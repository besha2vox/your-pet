import { ReactComponent as Pawprint1 } from '../../../images/backgraund-pawprint-blue.svg';
import { ReactComponent as Pawprint2 } from '../../../images/backgraund-pawprint-yellow.svg';
import { ReactComponent as Pawprint3 } from '../../../images/backgraund-pawprint-blue.svg';
import { ReactComponent as Pawprint4 } from '../../../images/backgraund-pawprint-yellow.svg';
import { ReactComponent as Pawprint5 } from '../../../images/backgraund-pawprint-yellow.svg';
import { ReactComponent as Pawprint6 } from '../../../images/backgraund-pawprint-yellow.svg';
import { ReactComponent as Pawprint7 } from '../../../images/backgraund-pawprint-blue.svg';

import styled from 'styled-components';

export const Parent = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  opacity: 0.52;

  @keyframes pawAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

// @for $i from 1 through 7 {
//   &:nth-child(#{$i}) {
//     animation-delay: #{(($i * -1)+6) * 0.45}s;
//   }
// }

export const Paw1 = styled(Pawprint1)`
  width: 157.22px;
  height: 157.22px;
  left: 235px;
  top: 671.2px;

  transform: rotate(-40.54deg);

  animation: 3000ms pawAnimation ease-in-out 1s infinite;
`;

export const Paw2 = styled(Pawprint2)`
  position: absolute;
  width: 157.22px;
  height: 157.22px;
  left: 268.97px;
  top: 515.56px;

  transform: rotate(127.69deg);

  animation: 3000ms pawAnimation ease-in-out 1s infinite;
`;

export const Paw3 = styled(Pawprint3)`
  position: absolute;
  width: 157.22px;
  height: 157.22px;
  left: 813.73px;
  top: 114px;

  transform: rotate(53.71deg);

  animation: 3000ms pawAnimation ease-in-out 3s infinite;
`;
export const Paw4 = styled(Pawprint4)`
  position: absolute;
  width: 58.83px;
  height: 58.83px;
  left: 699.25px;
  top: 178px;

  transform: rotate(7.08deg);

  animation: 3000ms pawAnimation ease-in-out 3s infinite;
`;
export const Paw5 = styled(Pawprint5)`
  position: absolute;
  width: 58.83px;
  height: 58.83px;
  left: 64.52px;
  top: 285.15px;

  transform: rotate(-125.93deg);

  animation: 3000ms pawAnimation ease-in-out 5s infinite;
`;
export const Paw6 = styled(Pawprint6)`
  position: absolute;
  width: 56.1px;
  height: 56.1px;
  left: 64.91px;
  top: 750.34px;

  transform: rotate(-125.93deg);

  animation: 3000ms pawAnimation ease-in-out 5s infinite;
`;
export const Paw7 = styled(Pawprint7)`
  position: absolute;
  width: 56.1px;
  height: 56.1px;
  left: 464px;
  top: 413.88px;

  transform: rotate(-65.1deg);

  animation: 3000ms pawAnimation ease-in-out 2s infinite;
`;
