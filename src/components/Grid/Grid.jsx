import React from "react";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";
import { Table, Thead, Tbody, Tr, Th, LoaderContainer } from "./styles";
import GridItem from "../GridItem/GridItem";
import Loader from "react-js-loader";

const Grid = () => {
  const { delivery, loading } = useContext(MyContext);

  return (
    <>
      {" "}
      {loading !== true && delivery ? (
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
      ) : (
        <LoaderContainer>
          <Loader
            type="spinner-default"
            bgColor={"#252138"}
            color={"#5D548C"}
            title={""}
            size={100}            
          />
        </LoaderContainer>
      )}
    </>
  );
};

export default Grid;
