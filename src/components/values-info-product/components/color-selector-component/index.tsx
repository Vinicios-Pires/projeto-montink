import { useProduct } from "../../../../context/product-context";
import { product } from "../../../../utils/consts";

const ColorSelectorComponent = () => {
  const { selectedColor, setSelectedColor } = useProduct();

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      {product.colors.map((color) => (
        <div
          key={color}
          onClick={() => handleSelectColor(color)}
          className={`w-16 h-16 border-1 rounded-lg cursor-pointer flex items-center justify-center hover:opacity-80 p-0.5
            ${
              selectedColor === color
                ? "border-custom-bg-header"
                : "border-gray-300"
            }`}
        >
          <img
            src={product.mediasByColor[color][0]}
            alt={color}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default ColorSelectorComponent;
