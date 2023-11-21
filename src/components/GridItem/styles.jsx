import styled from "styled-components";

export const Tr = styled.tr`
  &:hover {
    background-color: #424459;
    cursor: pointer;
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: center;
  word-break: break-all;
  padding-bottom: 10px;
  color: #fff;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 9px;
    &:last-child {
      width: 45px;
    }    
  }
  `;
