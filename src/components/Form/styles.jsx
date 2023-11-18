import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  position: relative;
  bottom: 50px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  width: 370px;
  height: 412px;
  
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  input {
    height: 35px;
    border-radius: 8px;
    outline: none;
    padding: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  h2 {
    text-align: center;
    color: #fff
  }

  .btn-form {
    width: 180px;
    height: 38px;
    border-radius: 3px;
    font-weight: 600;
    color: #fff;
    background-color: #36b0c9;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 588px) {
    width: 91%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
