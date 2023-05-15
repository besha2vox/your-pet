import styled from 'styled-components';

const FilterWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Btn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  padding: ${({ theme }) => theme.space[3] + 'px'};

  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.colors.lightBlue};
  border: none;
  border-radius: 50%;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    border-color: transparent;
    background-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.gradientBlue};
    border-radius: 40px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    z-index: -1;

    transition: opacity 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.blue};

    transition: stroke 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.space[3] + 'px'};
    min-width: 152px;

    font-family: ${({ theme }) => theme.fonts.main.bold};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.blue};

    background-color: transparent;
    border-width: ${({ filled }) => (filled ? 0 : '2px')};
    border-color: ${({ theme, isOpen }) =>
      isOpen ? 'transparent' : theme.colors.blue};
    border-style: solid;
    border-radius: 40px;
  }
`;

const Filters = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  width: 152px;
  height: ${({ isOpen, isAgeMenuOpen, isGenderMenuOpen }) =>
    isOpen ? filtersHeight(isAgeMenuOpen, isGenderMenuOpen) : '0px'};
  padding: ${({ theme }) => theme.space[3] + 'px'};

  background-color: #fff;
  border-radius: 20px;

  ${({ isOpen }) => isOpen && 'pointer-events: none'}

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  will-change: opacity, max-height;
  overflow: hidden;

  transition: opacity 500ms ${({ theme }) => theme.transition.main},
    height 300ms ${({ theme }) => theme.transition.main};
`;

const FiltersText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.blue};
  text-align: left;
`;

export { FilterWrapper, Btn, Filters, FiltersText };

function filtersHeight(ageFilterFlag, genderFilterFlag) {
  if (!ageFilterFlag && !genderFilterFlag) {
    return '126px';
  } else if (ageFilterFlag && !genderFilterFlag) {
    return '226px';
  } else if (!ageFilterFlag && genderFilterFlag) {
    return '197px';
  } else {
    return '298px';
  }
}
