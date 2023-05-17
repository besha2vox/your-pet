import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const PaginationList = styled.ul`
  display: flex;
  list-style-type: none;
  min-width: 310px;
  height: 52px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fef9f9;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;
  padding: 8px 12px;
  gap: 7px;
`;
const PaginationItem = styled.li`
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  line-height: 1.43;
  transition: all 350ms ${({ theme }) => theme.transition.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
  &.dots:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
    cursor: default;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
  &.disabled {
    pointer-events: none;
    background-color: transparent;
  }
`;
const ArrowLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

const ArrowRight = styled.div`
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;
export {
  PaginationList,
  PaginationContainer,
  PaginationItem,
  ArrowLeft,
  ArrowRight,
};
