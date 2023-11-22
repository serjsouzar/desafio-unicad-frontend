import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 95vh;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 16px;
  bottom: 74px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px
`


export const FormContainer = styled.form`
  display: flex;
  position: relative;
  bottom: 38px;
  flex-direction: column;
  justify-content: space-between;

  width: 370px;
  height: 550px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  input {
    width: 285px;
    height: 35px;
    border-radius: 8px;
    outline: none;
    padding: 5px;
    font-size: 14px;
  }

  .form-img {
    border-radius: 10px;
    height: auto;
    clip-path: inset(0px 0px 116px 0px);
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

  @media (max-width: 480px) {
    width: 91%;
    height: 520px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
