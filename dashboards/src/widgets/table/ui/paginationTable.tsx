import { Dispatch, FC, SetStateAction } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";

interface PropsPaginaionTable {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export const PaginationTable: FC<PropsPaginaionTable> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const renderPaginationItems = () => {
    const items = [];
    const maxDisplayedPages = 2;

    let startPage = Math.max(
      currentPage - Math.floor(maxDisplayedPages / 2),
      1,
    );
    const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    if (endPage - startPage > maxDisplayedPages - 1) {
      startPage = Math.min(endPage - maxDisplayedPages + 1, 1);
    }

    if (startPage > 1) {
      items.push(
        <Pagination key={"ellipsis-start"}>
          <PaginationEllipsis />
        </Pagination>,
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    return items;
  };
  return (
    <Pagination className={"my-6 px-4"}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>
        )}

        {renderPaginationItems()}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
