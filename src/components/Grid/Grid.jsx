import React from "react";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { Table, Thead, Tbody, Tr, Th } from "./styles";
import GridItem from "../GridItem/GridItem";

const Grid = () => {
  const { delivery } = useContext(MyContext);

  return (
    <>
      <Table>
          <Thead>
            <Tr>
              <Th width={25}>Nome</Th>
              <Th width={25}>End. Origem</Th>
              <Th width={25}>End. Entrega</Th>
              <Th width={25}>Data</Th>
            </Tr>
          </Thead>
          <Tbody>
            {delivery.map((item) => (
              <GridItem key={item._id} delivery={item} />
            ))}
          </Tbody>
      </Table>
    </>
  );
};

export default Grid;
