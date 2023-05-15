import { nanoid } from 'nanoid';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import { ArrowLeftIcon } from 'shared/utils/icons';

import {
  PaginationItem,
  PaginationContainer,
  ArrowLeft,
  ArrowRight,
  PaginationList,
} from './Pagination.styled';

const Pagination = props => {
  const {
    onPageChange,
    siblingCount = 1,
    currentPage,
    totalPagesCount,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPagesCount,
  });

  // console.log(currentPage);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationItem
          key={nanoid()}
          className={currentPage === 1 && 'disabled'}
          onClick={onPrevious}
        >
          <ArrowLeft key={'left'}>
            <ArrowLeftIcon />
          </ArrowLeft>
        </PaginationItem>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={nanoid()} className="dots">
                &#8230;
              </PaginationItem>
            );
          }

          return (
            <PaginationItem
              key={nanoid()}
              className={pageNumber === currentPage && 'selected'}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PaginationItem>
          );
        })}
        <PaginationItem
          key={nanoid()}
          className={currentPage === lastPage && 'disabled'}
          onClick={onNext}
        >
          <ArrowRight key={'right'}>
            <ArrowLeftIcon />
          </ArrowRight>
        </PaginationItem>
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
