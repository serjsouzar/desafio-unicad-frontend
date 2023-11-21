import { Tr, Td } from "./styles";
import { useContext } from "react";
import { MyContext } from "../../context/application.context";

const GridItem = ({ delivery }) => {
  const { setSelectedDelivery, setSeed } = useContext(MyContext);

  let deliveryDate = delivery.date.slice(0, 10);
  deliveryDate = deliveryDate
    .split("-")
    .map((e) => (e[0] === "0" ? e.slice(1) : e));
  deliveryDate =
    deliveryDate[2] + "/" + deliveryDate[1] + "/" + deliveryDate[0];                
  
    const reset = () => {
      setSeed(Math.random());
  }

  function handleSelectDelivery() {
    reset()
    setSelectedDelivery({
      originAddress: delivery?.originAddress,
      deliveryAddress: delivery?.deliveryAddress,
    })

  }

  return (
    <>
      <Tr onClick={() => handleSelectDelivery()}>
        <Td>{delivery.name}</Td>
        <Td className="_address">{delivery.originAddress}</Td>
        <Td className="_address">{delivery.deliveryAddress}</Td>
        <Td>{deliveryDate}</Td>
      </Tr>
    </>
  );
};

export default GridItem;
