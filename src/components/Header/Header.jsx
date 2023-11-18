import React from "react";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { Container, SubContainer } from "./styles";

const Header = ({ setOpenRegister, setOpenList }) => {

  const { setDelivery } = useContext(MyContext);

  function getResultsApi() {
    fetch("https://desafio-unicad-backend.onrender.com/deliveries")
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setDelivery(response.delivery)
      })
    }

  return (
    <>
      <Container>
        <img src={require("./../../assets/unicad-logo.png")} alt="logo-test" />
        <SubContainer>
          <h3
            onClick={() => {
              setOpenRegister(true);
              setOpenList(false);
            }}
          >
            Registrar
          </h3>
          <h3
            onClick={() => {
              setOpenList(true);
              setOpenRegister(false);
              getResultsApi()
            }}
          >
            Listagem
          </h3>
        </SubContainer>
      </Container>
    </>
  );
};

export default Header;
