import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  siblingCount = 1,
  currentPage,
  totalPagesCount,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPagesCount) {
      return range(1, totalPagesCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPagesCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPagesCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPagesCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPagesCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPagesCount - rightItemCount + 1,
        totalPagesCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, totalPagesCount, currentPage]);

  return paginationRange;
};

// !!!!!!!!!!!!!!!!!!!example of pagination component:!!!!!!!!!!!!!!!!!!
// import shortid from 'shortid';
// import { usePagination, DOTS } from 'usePagination';
// import {
//   PaginationItem,
//   PaginationContainer,
//   ArrowLeft,
//   ArrowRight,
// } from './Pagination.styled';

// const Pagination = props => {
//   const {
//     onPageChange,
//     siblingCount = 1,
//     currentPage,
//     totalPagesCount,
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     siblingCount,
//     totalPagesCount,
//   });

//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <PaginationContainer>
//       <PaginationItem
//         key={shortid.generate()}
//         className={currentPage === 1 && 'disabled'}
//         onClick={onPrevious}
//       >
//         <ArrowLeft key={'left'} />
//       </PaginationItem>
//       {paginationRange.map(pageNumber => {
//         if (pageNumber === DOTS) {
//           return (
//             <PaginationItem key={shortid.generate()}>&#8230;</PaginationItem>
//           );
//         }

//         return (
//           <PaginationItem
//             key={shortid.generate()}
//             className={pageNumber === currentPage && 'selected'}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </PaginationItem>
//         );
//       })}
//       <PaginationItem
//         key={shortid.generate()}
//         className={currentPage === lastPage && 'disabled'}
//         onClick={onNext}
//       >
//         <ArrowRight key={'right'} />
//       </PaginationItem>
//     </PaginationContainer>
//   );
// };

// export default Pagination;

// !!!!!!!!!!!!!!!!!!!!example of component usage: !!!!!!
// export const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [totalPages, setTotalPages] = useState(null);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const page = searchParams.get('page') || 1;
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         const { results, total_pages } = await getMovies(page);
//         setMovies([...results]);
//         setTotalPages(total_pages);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//     window.scrollTo(0, 0);
//   }, [page]);

//   const onPageChange = currentPage => {
//     if (page === currentPage) {
//       return;
//     }
//     setSearchParams({ page: currentPage });
//   };

//   return (
//     <Wrapper>
//       {loading && <Loader />}
//       {error && <Message>{error.message}</Message>}
//       {movies.length > 0 && <MoviesList movies={movies} />}
//       <Pagination
//         currentPage={Number(page)}
//         totalPagesCount={totalPages}
//         onPageChange={page => onPageChange(page)}
//       />
//     </Wrapper>
//   );
// };
