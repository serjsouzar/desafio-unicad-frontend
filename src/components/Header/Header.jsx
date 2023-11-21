import React from "react";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { Container, SubContainer } from "./styles";

const Header = ({
  setOpenRegister,
  openRegister,
  setOpenList,
  setLatitude1,
  setLongitude1,
  setLatitude2,
  setLongitude2,
}) => {
  const { setDelivery, setLoading } = useContext(MyContext);

  function getResultsApi() {
    fetch("https://desafio-unicad-backend.onrender.com/deliveries")
      .then((response) => response.json())
      .then((response) => {        
        setLoading(false)
        setDelivery(response.delivery);        
      }).catch((error) => {
        if (error) alert("Error: " + error)        
      });
  }

  function handleRegisterOption() {
    setOpenRegister(true);
    setOpenList(false);
    if (openRegister === true) {
      setLatitude1(0);
      setLongitude1(0);
      setLatitude2(0);
      setLongitude2(0);
    }
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
