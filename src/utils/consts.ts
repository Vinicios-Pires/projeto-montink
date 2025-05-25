export const product = {
  id: "0356a397-db92-4eab-9dba-0571b1b74c0e",
  title: "Tênis Adidas Breaknet - Preto+Branco",
  material: "Couro e Sintético",
  indicatedFor: "Dia a Dia",
  ankleHeight: "Cano Baixo",
  colors: ["Preto", "Branco"],
  mediasByColor: {
    Preto: [
      "https://raw.githubusercontent.com/Vinicios-Pires/projeto-montink/refs/heads/main/src/assets/preto/imagem-principal.webp",
      "../assets/preto/imagem-2.webp",
      "../assets/preto/imagem-3.webp",
      "../assets/preto/imagem-4.webp",
      "../assets/preto/imagem-5.webp",
      "../assets/preto/imagem-6.webp",
    ],
    Branco: [
      "../assets/branco/imagem-principal.webp",
      "../assets/branco/imagem-2.webp",
      "../assets/branco/imagem-3.webp",
      "../assets/branco/imagem-4.webp",
      "../assets/branco/imagem-5.webp",
    ],
  } as Record<string, string[]>,
  sizes: ["38", "39", "40", "41", "42"],
  price: 299.99,
};
