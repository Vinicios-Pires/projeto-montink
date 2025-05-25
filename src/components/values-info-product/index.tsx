import { product } from "../../utils/consts";
import DefaultContainerInfo from "./components/default-container-info";
import ColorSelectorComponent from "./components/color-selector-component";
import SizeSelectorComponent from "./components/size-selector-component";
import CepSelectorComponent from "./components/cep-selector-component";

const ValuesInfoProduct = () => {
  const formatColors = (colors: string[]) => {
    if (!colors.length) return "";

    if (colors.length === 1) {
      return colors[0];
    }

    if (colors.length === 2) {
      return `${colors[0]} e ${colors[1]}`;
    }

    const allButLast = colors.slice(0, -1).join(", ");
    const last = colors[colors.length - 1];

    return `${allButLast} e ${last}`;
  };

  return (
    <div className="flex flex-col w-[20%]">
      <div className="flex flex-col">
        <p>
          <span className="font-semibold">Cor:</span>{" "}
          {formatColors(product.colors)}
        </p>
        <DefaultContainerInfo>
          <ColorSelectorComponent />
        </DefaultContainerInfo>

        <p className="mt-4">
          <span className="font-semibold">Tamanho:</span>{" "}
        </p>
        <DefaultContainerInfo>
          <SizeSelectorComponent />
        </DefaultContainerInfo>

        <button
          className={`w-full h-12 rounded-md bg-custom-bg-header hover:opacity-80 text-white font-semibold transition mt-8 `}
        >
          COMPRAR
        </button>

        <div className="mt-4">
          <p className="mb-2">
            <span className="font-semibold">Consulte seu CEP</span>
          </p>
          <CepSelectorComponent />
        </div>
      </div>
    </div>
  );
};

export default ValuesInfoProduct;
