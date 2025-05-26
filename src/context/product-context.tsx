import { createContext, useContext, type ReactNode } from "react";
import { usePersistentState } from "../hooks/usePersistentState";

type ProductContextType = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedColor, setSelectedColor] = usePersistentState(
    "selectedProductColor",
    "Preto",
    15
  );

  return (
    <ProductContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct deve ser usado dentro de ProductProvider");
  }
  return context;
};
