import type { PropsWithChildren } from "react";
import InfosProduct from "../infos-product";
import LayoutContentProduct from "../layout-content-product";
import ValuesInfoProduct from "../values-info-product";
import ViewProduct from "../view-product";
import classNames from "classnames";

interface SelectedProductProps extends PropsWithChildren {
  overrideClassName?: string;
}

const SelectedProduct = ({ overrideClassName }: SelectedProductProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col h-screen w-[70%]",
        overrideClassName
      )}
    >
      <LayoutContentProduct>
        <InfosProduct />
        <ViewProduct />
        <ValuesInfoProduct />
      </LayoutContentProduct>
    </div>
  );
};

export default SelectedProduct;
