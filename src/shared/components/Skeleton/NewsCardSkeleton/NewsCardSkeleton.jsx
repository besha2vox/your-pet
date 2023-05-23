import { PawprintSkeletonIcon } from 'shared/utils/icons';
import { useWindowSize } from 'hooks/useResize';

import {
  Item,
  NewsBody,
  NewsTitle,
  TextContent,
  BottomInfoWrapper,
  NewsDate,
  NewsLink,
  ImageWrapper,
  Wrapper,
} from './NewsCardSkeleton.styled';

const NewsCardSkeleton = ({ cards }) => {
  const [screenWidth] = useWindowSize();
  return Array(cards)
    .fill(0)
    .map(card => (
      <Item>
        <ImageWrapper>
          <PawprintSkeletonIcon />
        </ImageWrapper>
        <TextContent>
          <NewsTitle count={2} inline={true} />
          <Wrapper>
            <NewsBody count={screenWidth < 768 ? 7 : 5} inline={true} />
          </Wrapper>
          <BottomInfoWrapper>
            <NewsDate inline={true} />
            <NewsLink inline={true} />
          </BottomInfoWrapper>
        </TextContent>
      </Item>
    ));
};

export default NewsCardSkeleton;
