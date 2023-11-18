import React from 'react'
import { Container, SubContainer } from './styles'

const Header = ({ setOpenRegister, setOpenList }) => {
  return (
    <>
    <Container>
      <img src={require("./../../assets/unicad-logo.png")} alt='logo-test'/>
      <SubContainer>
        <h3 onClick={() => {
          setOpenRegister(true)
          setOpenList(false)
        }}>Registrar</h3>
        <h3 onClick={() => {
          setOpenList(true)
          setOpenRegister(false)
        }}>Listagem</h3>
      </SubContainer>
    </Container>
    </>
  )
}

export default Header