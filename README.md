# Página de Produto - E-commerce

Este projeto é um front-end desenvolvido em **React + TypeScript + Vite**, com estilização utilizando **Tailwind CSS**.

## ✨ Funcionalidades

- **Galeria de Imagens do Produto**

  - Uma imagem principal (ocupando 35% da tela).
  - Miniaturas abaixo da imagem principal.
  - Alteração da imagem principal ao clicar nas miniaturas.

- **Informações do Produto**

  - Título do produto.
  - Preço do produto.

- **Seletores de Variantes**

  - Tamanho e Cor.
  - Os seletores são gerados dinamicamente a partir de arrays ou objetos. Nenhum valor é fixo no código.

- **Consulta de Frete por CEP**

  - Campo para digitar o CEP.
  - Verificação e formatação automática do CEP.
  - Consulta na API pública [ViaCEP](https://viacep.com.br/) para exibir o endereço completo, caso o CEP seja válido.

- **Persistência dos Dados**
  - Todas as ações feitas pelo usuário (seleção de imagem, tamanho, cor e CEP) são salvas localmente.
  - Os dados são mantidos por **15 minutos**, mesmo que a página seja atualizada usando **localStorage** com controle de tempo.

## 🔗 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) - Para requisições HTTP
- [ViaCEP API](https://viacep.com.br/) - Para consulta de CEP
