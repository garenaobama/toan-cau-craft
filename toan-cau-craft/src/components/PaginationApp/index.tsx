"use client";
import React from "react";
import { cn, Pagination, PaginationItemType } from "@nextui-org/react";
import { Icons } from "@/icons";
import Image from "next/image";

export default function PaginationApp() {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: any) => {
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
        ref={ref}
        className={cn(className, isActive && "text-white bg-textPrimary")}
        onClick={() => setPage(value)}
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
      total={10}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  );
}
