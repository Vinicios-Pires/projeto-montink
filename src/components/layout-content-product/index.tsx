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
        "flex mt-16 w-[100%] justify-around",
        overrideClassName
      )}
    >
      {children}
    </div>
  );
};

export default LayoutContentProduct;
