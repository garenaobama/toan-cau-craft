import { SearchBox } from "@/components/SearchBox";
import { cormorantSemiBold, latoRegular } from "@/fonts";
import { Checkbox } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

export const FilterBox = ({
  title,
  data,
  className,
}: {
  className?: string;
  title: string;
  data: {
    value: string;
  }[];
}) => {
  return (
    <div className={twMerge("", className)}>
      <h2
        className={twMerge(
          cormorantSemiBold.className,
          "text-textPrimary text-lg"
        )}
      >
        {title}
      </h2>
      <SearchBox className="w-full mt-3" />
      <div className="mt-3">
        {data.map((item) => (
          <FilterItem key={item.value} title={item.value} />
        ))}
      </div>
    </div>
  );
};

const FilterItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center m-3">
      <Checkbox defaultSelected color="default">
        <p
          className={twMerge(
            latoRegular.className,
            "text-textPrimary text-base"
          )}
        >
          {title}
        </p>
      </Checkbox>
    </div>
  );
};
