
import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background: #f6f4f6;
  height: 110px;
  z-index: 1;
  position: relative;
  transition: all ease 0.2s;
  
  img {
    padding: 10px; 
    width: 320px;
  }

  @media (max-width: 588px) {
    justify-content: center;
  }
`;