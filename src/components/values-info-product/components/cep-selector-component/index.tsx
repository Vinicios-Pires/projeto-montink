import { useState } from "react";
import { formatCep } from "../../../../utils/fn";
import axios from "axios";
import type { AddressInfo } from "../../../../utils/types";
import { usePersistentState } from "../../../../hooks/usePersistentState";

const CepSelectorComponent = () => {
  const [cep, setCep] = usePersistentState<string>("cep", "", 15);
  const [addressInfo, setAddressInfo] = usePersistentState<AddressInfo | null>(
    "addressInfo",
    null,
    15
  );

  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [cepError, setCepError] = useState<string>("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(e.target.value);
    setCep(formattedCep);
    setCepError("");
    if (addressInfo) {
      setAddressInfo(null);
    }
  };

  const handleCheckcep = async (cep: string) => {
    try {
      setIsLoadingCep(true);
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data.erro) {
        setCepError("CEP inválido. Por favor, verifique e tente novamente.");
        setAddressInfo(null);
        return;
      }

      setAddressInfo(data);

      return data;
    } catch (error) {
      console.error("Erro ao consutlar CEP:", error);
    } finally {
      setIsLoadingCep(false);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={handleCepChange}
          maxLength={9}
          className={`flex-1 h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-custom-bg-header
                ${cepError ? "border-red-500" : "border-gray-300"}`}
        />
        <button
          onClick={() => handleCheckcep(cep)}
          disabled={isLoadingCep || !cep}
          className="px-4 h-10 bg-custom-bg-header text-white rounded-md hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          {isLoadingCep ? "..." : "OK"}
        </button>
      </div>
      {cepError && <p className="text-red-500 text-sm mt-1">{cepError}</p>}

      {addressInfo && (
        <div className="mt-3 rounded-md">
          <p className="text-sm">
            <span className="font-medium">Cidade:</span>{" "}
            {addressInfo.localidade}
          </p>
          <p className="text-sm">
            <span className="font-medium">Estado:</span> {addressInfo.estado}
          </p>
          <p className="text-sm">
            <span className="font-medium">Rua:</span> {addressInfo.logradouro}
          </p>
          <p className="text-sm">
            <span className="font-medium">Bairro:</span> {addressInfo.bairro}
          </p>
        </div>
      )}
    </>
  );
};

export default CepSelectorComponent;
