import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Item = styled.li`

display: flex;
flex-direction: column;
// justify-content: center;
align-items: flex-start;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 20px;

padding: 0px 0px 12px;
margin-top: 40px;

background: #FFFFFF;
  
list-style-type: none;


@media (min-width: 768px) {
  max-width: 336px;
  margin-top: 60px;
}
@media (min-width: 1280px) {
  max-width: 394px;
}
}
`;

export const Line = styled.span`
    margin-bottom: 14px;
    display: block;
    min-width: 280px;
    height: 4px;
    width: 100%;
  
    border-radius: 40px;
    background-image: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    @media (min-width: 768px) {
      width: 336px;
      height: 8px;
    }
    @media (min-width: 1280px) {
      width: 394px;
    }
  }
`;

export const Poster = styled.img`
  margin-bottom: 16px;
  width: 100%;

  border-radius: 20px;
  min-width: 280px;
  min-height: 252px;

  @media (min-width: 768px) {
    width: 336px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 252px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: flex-start;
  height: auto;
  padding: 0px 12px;
`;

export const NewsTitle = styled(EllipsisText)`
  margin-bottom: 15px;
  display: block;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: -0.01em;

  flex-grow: 2;
`;

export const NewsBody = styled(EllipsisText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;

  @media (min-width: 768px) {
    height: 150px;
    display: block;
  }
  @media (min-width: 1280px) {
    height: 120px;
  }
`;

export const BottomInfoWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  //align-items: center;
  justify-content: space-between;
`;

export const NewsDate = styled.p`
  font-family: 'Manrope';

  font-weight: 400;
  font-size: 16px;

  line-height: 22px;
  color: #888888;
`;

export const NewsLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
  color: #54adff;
  text-decoration: none;
  &:hover,
  :focus {
    color: #ffc107;
  }
`;
