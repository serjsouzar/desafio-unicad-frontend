import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import {
  ButtonContainer,
  Container,
  FormContainer,
  InputContainer,
  InputContent,
} from "./styles";

const Form = ({ handleCreateDelivery }) => {
  const {
    name,
    setName,
    originAddress,
    setOriginAddress,
    deliveryAddress,
    setDeliveryAddress,
    date,
    setDate,
  } = useContext(MyContext);

  return (
    <Container>
      <FormContainer>
        <img
          src={require("./../../assets/form-background.png")}
          alt="logo-test"
          className="form-img"
        />
        <InputContainer>
          <InputContent>
          <label>Nome:</label>  
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Preencha um nome"
          />
          </InputContent>
          <InputContent>
          <label>Endereço de origem:</label>
          <input
            type="text"
            value={originAddress}
            onChange={(e) => setOriginAddress(e.target.value)}
            placeholder="Av. Presidente Wilson 113, Rio de Janeiro"
          />
          </InputContent>
          <InputContent>
          <label>Endereço de entrega:</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Av. Infante Dom Henrique 85, Rio de Janeiro"
          />
          </InputContent>
          <InputContent>
          <label>Data de entrega:</label>
          <input
            type="date"
            value={date}            
            onChange={(e) => setDate(e.target.value)}
          />
          </InputContent>
          <ButtonContainer>
            <button
              className="btn-form"
              type="button"
              onClick={() => {
                let delivery = {
                  name: name,
                  originAddress: originAddress,
                  deliveryAddress: deliveryAddress,
                  date: date,
                };
                handleCreateDelivery(delivery);
                delivery = null;
              }}
            >
              Registrar
            </button>
          </ButtonContainer>
        </InputContainer>
      </FormContainer>
    </Container>
  );
};

export default Form;
