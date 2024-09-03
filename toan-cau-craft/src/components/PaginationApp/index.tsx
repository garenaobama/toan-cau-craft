"use client";
import React, { useState } from "react";
import { cn, Pagination, PaginationItemType } from "@nextui-org/react";
import { Icons } from "@/icons";
import Image from "next/image";

type PaginationApp = {
  key?: string,
  value?: PaginationItemType,
  onNext?: ()=>void,
  onPrevious?: ()=>void,
  setPage?: (value:number) =>void,
  className?: string
  total?: number
}

export default function PaginationApp({
  onNext,
  onPrevious,
  setPage,
  total=1,
}: PaginationApp) {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const renderItem = ({
    key,
    value,
    className
  }: PaginationApp) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <Image
            alt="chevrondown"
            className="-rotate-90"
            src={Icons.ChevronDown}
          />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}
          onClick={onPrevious}
        >
          <Image
            alt="chevrondown"
            className="rotate-90"
            src={Icons.ChevronDown}
          />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        className={cn(className, currentPage == value && "text-white bg-textPrimary")}
        onClick={() => {
          setCurrentPage(value??1)
          if(setPage){
            setPage(value??1)
          }}
        }
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      classNames={{
        base: "flex justify-center",
      }}
      disableCursorAnimation
      showControls
      total={total}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  );
}
