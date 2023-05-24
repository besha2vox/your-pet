import styled from 'styled-components';

const Menu = styled.div`
  padding-right: ${({ theme }) => theme.space[2] * 5 + 2 + 'px'};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
`;

const MenuBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.space[1] * 5 + 'px'};

  width: 100%;
  padding-top: ${({ theme }) => theme.space[2] + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] + 'px'};
  padding-left: ${({ theme }) => theme.space[3] + 'px'};

  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.blue};

  background-color: transparent;
  border: none;
  border-radius: 20px;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

const AgeSubMenu = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  width: 100%;
  height: ${({ isShown }) => (isShown ? '104px' : 0)};
  padding-top: ${({ theme, isShown }) => (isShown ? theme.space[2] + 'px' : 0)};
  padding-left: ${({ theme }) => theme.space[5] + 6 + 'px'};

  overflow: hidden;

  transition: height 300ms ${({ theme }) => theme.transition.main};
`;

const GenderSubMenu = styled(AgeSubMenu)`
  height: ${({ isShown }) => (isShown ? '75px' : 0)};
`;

const ItemText = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 24px;
  padding-left: ${({ theme }) => theme.space[5] + 4 + 'px'};

  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.blue};
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

const CheckedIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

const ItemCheckbox = styled.input`
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

const KotikiBtn = styled(MenuBtn)`
  min-height: 32px;
  padding-left: ${({ theme }) => theme.space[3] + 2 + 'px'};

  & svg {
    stroke: none;
    fill: ${({ theme }) => theme.colors.blue};
  }
`;

export {
  Menu,
  MenuBtn,
  AgeSubMenu,
  GenderSubMenu,
  Icon,
  CheckedIcon,
  ItemText,
  ItemCheckbox,
  KotikiBtn,
};
