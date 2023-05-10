import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  z-index: 2;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 40px;
  background-color: #ffffff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.colors.black};

  & svg {
    stroke: ${({ theme }) => theme.colors.black};

    transition: stroke 250ms ${({ theme }) => theme.transition.main};
  }
  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;
