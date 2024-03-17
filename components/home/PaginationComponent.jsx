"use client";
import React from "react";
import useCustomRouter from "@hooks/useCustomRouter";
import clsx from "clsx";
import { Button } from "@components/ui/button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = ({ page, totalPages }) => {
  const { pushQuery, query } = useCustomRouter();
  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = page - 1;
    let endPage = page + 2;

    if (page <= 2) {
      startPage = 1;
      endPage = 3;
    } else if (page >= totalPages - 1) {
      startPage = totalPages - 2;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  return (
    <Pagination
      className="cursor-pointer"
      ref={(ref) => {
        if (!ref) return;
        ref.ontouchstart = (e) => {
          e.preventDefault();
        };
      }}
    >
      <PaginationContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => {
            e.preventDefault();
          };
        }}
      >
        <PaginationItem
          className="max-md:hidden"
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          <Button
            variant="outline"
            onClick={() => {
              page = 1;
              pushQuery({ page });
            }}
          >
            <MdKeyboardDoubleArrowLeft className="text-[18px]" />
          </Button>
        </PaginationItem>
        <PaginationItem
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          <PaginationPrevious
            onClick={() => {
              if (page > 1) page = page - 1 || 1;
              pushQuery({ page });
            }}
            className={clsx(
              (page <= 1 || page === null) && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>

        {pages.map((p, i) => (
          <PaginationItem
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => {
                e.preventDefault();
              };
            }}
            onClick={() => {
              page = p;
              pushQuery({ page });
            }}
            className={clsx()}
          >
            <PaginationLink isActive={p === page}>{p}</PaginationLink>
          </PaginationItem>

          // </Link>
        ))}

        <PaginationItem
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          {page < totalPages - 1 && <PaginationEllipsis />}
        </PaginationItem>
        <PaginationItem
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          <PaginationNext
            onClick={() => {
              page = page + 1;
              pushQuery({ page });
            }}
            className={clsx(
              page >= totalPages && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
        <PaginationItem
          className="max-md:hidden"
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          <Button
            variant="outline"
            onClick={() => {
              page = totalPages;
              pushQuery({ page });
            }}
          >
            <MdKeyboardDoubleArrowRight className="text-[18px]" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
