import React, { createContext, useState } from "react";

export const MyContext = createContext("");

export const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [originAddress, setOriginAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [date, setDate] = useState("");
  const [delivery, setDelivery] = useState([])


  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        originAddress,
        setOriginAddress,
        deliveryAddress,
        setDeliveryAddress,
        date,
        setDate,
        delivery,
        setDelivery
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
