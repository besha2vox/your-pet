import styled from 'styled-components';

const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const Label = styled.label`
  /* &:before {
    position: absolute;
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease,
      top 100ms 1600ms ${({ theme }) => theme.transition.main},
      height 100ms 1600ms ${({ theme }) => theme.transition.main},
      background-color 200ms ease,
      transform 200ms ${({ theme }) => theme.transition.main};
  } */
`;

export { Checkbox, Label };
