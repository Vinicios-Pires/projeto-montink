import { useEffect, useState, useMemo } from "react";
import { useProduct } from "../../context/product-context";
import { product } from "../../utils/consts";

const ViewProduct = () => {
  const { selectedColor } = useProduct();

  const images = useMemo(() => {
    return product.mediasByColor[selectedColor] ?? [];
  }, [selectedColor]);

  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col items-center w-full lg:flex-1 order-2 lg:order-2">
      <div className="w-full max-w-sm lg:w-[35vw] lg:h-[35vw] h-80 lg:max-w-none">
        <img
          src={mainImage}
          alt={`Tênis ${product.title} na cor ${selectedColor}`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        {images.map((img) => (
          <div
            key={img}
            onClick={() => setMainImage(img)}
            className={`w-12 h-12 lg:w-16 lg:h-16 border-2 rounded-lg cursor-pointer p-1
              ${
                mainImage === img
                  ? "border-custom-bg-header"
                  : "border-gray-300"
              }`}
          >
            <img
              src={img}
              alt={`Miniatura ${img}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProduct;
