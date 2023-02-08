import { DOTS, usePagination } from "hooks/usePagination";
import classnames from "classnames";

interface PaginationProps {
  onPageChange: (value: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}
const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange && (currentPage === 0 || paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 0;
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
      data-testid="pagination-container"
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        data-testid="pagination-item-left-arrow"
      >
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots" key={index}>&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              key={index}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
        data-testid="pagination-item-right-arrow"
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
