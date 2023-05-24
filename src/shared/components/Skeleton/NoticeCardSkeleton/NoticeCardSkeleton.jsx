import { PawprintSkeletonIcon } from 'shared/utils/icons';

import {
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  DeleteBtn,
  InfoWrapper,
  Info,
  CardFooter,
  Comments,
  MoreBtn,
} from './NoticeCardSkeleton.styled';

const NoticeCardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((card, i) => (
      <ListItem key={i}>
        <ImageWrapper>
          <PawprintSkeletonIcon />
          <Category inline={true} />
          <FavoriteBtn />
          <DeleteBtn />
          <InfoWrapper>
            <Info inline={true} />
            <Info inline={true} />
            <Info inline={true} />
          </InfoWrapper>
        </ImageWrapper>
        <CardFooter>
          <Comments inline={true} />
          <MoreBtn inline={true} />
        </CardFooter>
      </ListItem>
    ));
};

export default NoticeCardSkeleton;
