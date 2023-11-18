import { Tr, Td } from "./styles";

const GridItem = ({ delivery }) => {
  let deliveryDate = delivery.date.slice(0, 10);
  deliveryDate = deliveryDate
    .split("-")
    .map((e) => (e[0] === "0" ? e.slice(1) : e));
  deliveryDate =
    deliveryDate[2] + "/" + deliveryDate[1] + "/" + deliveryDate[0];

  return (
    <Tr>
      <Td>{delivery.name}</Td>
      <Td>{delivery.originAddress}</Td>
      <Td>{delivery.deliveryAddress}</Td>
      <Td>{deliveryDate}</Td>
    </Tr>
  );
};

export default GridItem;
