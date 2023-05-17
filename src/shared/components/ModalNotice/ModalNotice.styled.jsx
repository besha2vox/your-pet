import styled from 'styled-components';

const Wrapper = styled.div`
  width: 280px;

  padding: 0 ${({ theme }) => theme.space[2] * 3 + 'px'};
  padding-top: ${({ theme }) => theme.space[3] * 5 + 4 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[4] + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 681px;

    padding: ${({ theme }) => theme.space[5] + 'px'};
    padding-bottom: ${({ theme }) => theme.space[3] * 3 + 'px'};
  }
`;

const Positioning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.space[3] * 3 + 'px'};
  }
`;

const Image = styled.div`
  position: relative;

  width: 240px;
  height: 240px;

  background-image: url(${({ bgi }) => bgi});
  background-position: center;
  background-size: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 262px;
    height: 298px;
  }
`;

const InfoWrapper = styled.div`
  /* width: 100%; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  margin-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

const Info = styled.p`
  display: flex;
  align-items: flex-end;
`;

const InfoName = styled.span`
  width: 81px;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[1]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 121px;

    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;

const InfoCred = styled.span`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;

const CommentWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[2] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.space[3] * 3 + 3 + 'px'};
  }
`;

const Comment = styled.span`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3] + 'px'};

  margin-top: ${({ theme }) => theme.space[2] * 3 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: end;
    gap: ${({ theme }) => theme.space[4] + 'px'};

    margin-top: ${({ theme }) => theme.space[6] + 6 + 'px'};
  }
`;

export {
  Wrapper,
  Positioning,
  Image,
  InfoWrapper,
  Container,
  Title,
  Info,
  InfoName,
  InfoCred,
  CommentWrapper,
  Comment,
  BtnWrapper,
};
