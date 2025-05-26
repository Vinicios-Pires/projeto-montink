import { product } from "../../utils/consts";
import { formatPrice } from "../../utils/fn";

const InfosProduct = () => {
  return (
    <div className="flex flex-col w-full lg:w-[20%] order-1 lg:order-1">
      <div className="flex flex-col gap-1">
        <h2 className="text-[18px] lg:text-[20px] leading-[1.4] text-custom-primary-text font-bold">
          {product.title}
        </h2>
        <h2 className="text-[18px] lg:text-[20px] leading-[1.4] text-custom-primary-text font-bold mb-4">
          {formatPrice(product.price)}
        </h2>
        <p className="text-sm lg:text-base">
          <span className="font-semibold">Material:</span> {product.material}
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-semibold">Indicado para:</span>{" "}
          {product.indicatedFor}
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-semibold">Altura do cano:</span>{" "}
          {product.ankleHeight}
        </p>
      </div>
    </div>
  );
};

export default InfosProduct;
