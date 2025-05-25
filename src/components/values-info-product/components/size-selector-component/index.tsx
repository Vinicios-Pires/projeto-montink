import { product } from "../../../../utils/consts";
import { usePersistentState } from "../../../../hooks/usePersistentState";

const SizeSelectorComponent = () => {
  const [selectedSize, setSelectedSize] = usePersistentState<string | null>(
    "selectedSize",
    null,
    15
  );

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      {product.sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSelectSize(size)}
          className={`w-8 h-8 rounded-full border 
              ${
                selectedSize === size
                  ? "border-custom-bg-header"
                  : "border-gray-300"
              } 
              hover:opacity-80 text-[12px]`}
        >
          {size}
        </button>
      ))}
    </>
  );
};

export default SizeSelectorComponent;
