export const formatPrice = (price: number) => {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedPrice;
};

export const validateCep = (cep: string) => {
  const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
  return cepRegex.test(cep);
};

export const formatCep = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 5) {
    return numbers;
  }
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
};
