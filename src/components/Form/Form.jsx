import React from "react";
import { ButtonContainer, Container, FormContainer } from "./styles";
import { useState } from "react";

const Form = () => {
  const [date, setDate] = useState(null);

  function handleClick() {
    alert(date);
  }

  return (
    <Container>
      <FormContainer>
        <input type="text" placeholder="Preencha um nome" />
        <input type="text" placeholder="Informe endereço de origem" />
        <input type="text" placeholder="Informe endereço de entrega" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <ButtonContainer>
          <button
            className="btn-form"
            type="submit"
            onClick={() => handleClick()}
          >
            Clique aqui
          </button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Form;
