import React from "react";
import { ButtonContainer, Container, FormContainer } from "./styles";

const Form = ({
  name,
  originAddress,
  deliveryAddress,
  date,
  setName,
  setOriginAddress,
  setDeliveryAddress,
  setDate,
  handleCreateDelivery,
}) => {

  return (
    <Container>
      <FormContainer>
        <h2>Registre aqui uma entrega</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Preencha um nome"
        />
        <input
          type="text"
          value={originAddress}
          onChange={(e) => setOriginAddress(e.target.value)}
          placeholder="Informe endereço de origem"
        />
        <input
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          placeholder="Informe endereço de entrega"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <ButtonContainer>
          <button className="btn-form" type="button" onClick={ () => {
            let delivery = {
              name: name,
              originAddress: originAddress,
              deliveryAddress: deliveryAddress,
              date: date
            }
            handleCreateDelivery(delivery)
            delivery = null            
          }}>
            Registrar
          </button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Form;
