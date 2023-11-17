import React from "react";
import { ButtonContainer, Container, FormContainer } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [date, setDate] = useState(null);

  const notify = () =>
    toast("✅ Entrega criada", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <Container>
      <FormContainer>
        <h2>Registre aqui uma entrega</h2>
        <input type="text" placeholder="Preencha um nome" />
        <input type="text" placeholder="Informe endereço de origem" />
        <input type="text" placeholder="Informe endereço de entrega" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <ButtonContainer>
          <button className="btn-form" type="submit" onClick={notify}>
            Registrar
          </button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Form;
