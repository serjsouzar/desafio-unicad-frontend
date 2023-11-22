import React from "react";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { Container, SubContainer } from "./styles";

const Header = ({
  setOpenRegister,
  setOpenList,
}) => {
  const { setDelivery, setLoading } = useContext(MyContext);

  function getResultsApi() {
    fetch("https://desafio-unicad-backend.onrender.com/deliveries")
      .then((response) => response.json())
      .then((response) => {        
        setLoading(false)
        setDelivery(response.delivery);        
      }).catch((error) => {
        if (error) console.log("Error: " + error)        
      });
  }

  function handleRegisterOption() {
    setOpenRegister(true);
    setOpenList(false);    
  }

  return (
    <>
      <Container>
        <img src={require("./../../assets/unicad-logo.png")} alt="logo-test" />
        <SubContainer>
          <h3 onClick={() => handleRegisterOption()}>Registrar</h3>
          <h3
            onClick={() => {
              setOpenList(true);
              setOpenRegister(false);
              getResultsApi();
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
