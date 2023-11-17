import React from 'react'
import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <img src={require("./../../assets/unicad-logo.png")} alt='logo-test'/>
    </Container>
  )
}

export default Header