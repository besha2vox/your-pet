import { nanoid } from 'nanoid';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import { ArrowLeftIcon } from 'shared/utils/icons';
import { useWindowSize } from 'hooks/useResize';

import {
  PaginationButton,
  PaginationContainer,
  ArrowLeft,
  ArrowRight,
  PaginationList,
} from './Pagination.styled';

const Pagination = ({
  onPageChange,
  siblingCount = 1,
  currentPage,
  totalPagesCount,
}) => {
  const [viewportWidth] = useWindowSize();
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPagesCount,
    viewportWidth,
  });

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
        {viewportWidth < 767 && currentPage === 1 ? (
          ''
        ) : (
          <li key="prev">
            <PaginationButton
              key={nanoid()}
              className={currentPage === 1 && 'disabled'}
              onClick={onPrevious}
            >
              <ArrowLeft key={'left'}>
                <ArrowLeftIcon />
              </ArrowLeft>
            </PaginationButton>
          </li>
        )}
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return viewportWidth < 767 ? (
              ''
            ) : (
              <li key={pageNumber}>
                <PaginationButton key={nanoid()} className="dots">
                  &#8230;
                </PaginationButton>
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <PaginationButton
                key={nanoid()}
                className={pageNumber === currentPage && 'selected'}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationButton>
            </li>
          );
        })}
        {viewportWidth < 767 && currentPage === lastPage ? (
          ''
        ) : (
          <li key="next">
            <PaginationButton
              key={nanoid()}
              className={currentPage === lastPage && 'disabled'}
              onClick={onNext}
            >
              <ArrowRight key={'right'}>
                <ArrowLeftIcon />
              </ArrowRight>
            </PaginationButton>
          </li>
        )}
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
