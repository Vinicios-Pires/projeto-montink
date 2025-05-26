import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface LayoutContentProductProps extends PropsWithChildren {
  overrideClassName?: string;
}

const LayoutContentProduct = ({
  children,
  overrideClassName,
}: LayoutContentProductProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col lg:flex-row mt-4 lg:mt-16 w-full gap-6 lg:gap-4 lg:justify-around px-4 lg:px-0 pb-8 lg:pb-0",
        overrideClassName
      )}
    >
      {children}
    </div>
  );
};

export default LayoutContentProduct;
