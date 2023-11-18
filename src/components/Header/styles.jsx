import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #f6f4f6;
  height: 110px;
  z-index: 1;
  position: relative;
  transition: all ease 0.2s;
  flex-wrap: wrap;

  img {
    padding: 10px;
    width: 320px;
  }

  @media (max-width: 680px) {
    justify-content: center;
    align-items: center;

    img {
      padding: 0;
      width: 280px;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  max-width: 380px;
  
  h3 {
    color: #6fc6d9;
    position: relative;
    padding-bottom: 2px;
    cursor: pointer;
  }

  h3::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #424459;
    transition: width 0.25s ease-out;
  }

  h3:hover::before { 
    width: 100%;
    left: 0;
    right: auto;
  }

  @media (max-width: 680px) {
    align-items: start;
  }
`;
