import { createContext, useContext, useState, type ReactNode } from "react";

type ProductContextType = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedColor, setSelectedColor] = useState("Preto");

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
