import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 280px;

  padding: ${({ theme }) => theme.space[6] + 'px'};
  padding-left: ${({ theme }) => theme.space[6] + 'px'};
  padding-right: ${({ theme }) => theme.space[6] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 680px;

    padding: ${({ theme }) => theme.space[6] + 'px'};
    padding-left: ${({ theme }) => theme.space[6] + 'px'};
    padding-right: ${({ theme }) => theme.space[6] + 'px'};
  }
`;

const Text = styled.p`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  margin-top: ${({ theme }) => theme.space[6] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const Contact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  min-width: 165px;
  max-width: 165px;
  min-height: 40px;
  max-height: 40px;
  padding: ${({ theme }) => theme.space[1] * 3 + 'px'};

  font-family: 'Manrope-SemiBold';
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.yellow};

  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;

  transition: color 350ms ${({ theme }) => theme.transition.main},
    background-color 350ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: #fef9f9;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export { Wrapper, Text, ContactsWrapper, Contact };
