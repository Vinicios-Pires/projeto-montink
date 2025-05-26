import type { PropsWithChildren } from "react";
import InfosProduct from "../infos-product";
import LayoutContentProduct from "../layout-content-product";
import ValuesInfoProduct from "../values-info-product";
import ViewProduct from "../view-product";
import classNames from "classnames";
import { usePersistentState } from "../../hooks/usePersistentState";

interface SelectedProductProps extends PropsWithChildren {
  overrideClassName?: string;
}

const SelectedProduct = ({ overrideClassName }: SelectedProductProps) => {
  const [selectedColor] = usePersistentState<string | null>(
    "selectedColor",
    "Preto",
    15
  );

  return (
    <div
      className={classNames(
        "flex flex-col w-full lg:w-[70%] min-h-0 lg:h-screen overflow-y-auto overflow-x-hidden",
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        overrideClassName
      )}
    >
      <LayoutContentProduct>
        <InfosProduct />
        <ViewProduct key={selectedColor} />
        <ValuesInfoProduct />
      </LayoutContentProduct>
    </div>
  );
};

export default SelectedProduct;
