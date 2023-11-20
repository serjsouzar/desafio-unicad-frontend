import React, { createContext, useState } from "react";

export const MyContext = createContext("");

export const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  
  const [originAddress, setOriginAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  
  const [date, setDate] = useState("");
  const [delivery, setDelivery] = useState([])

  const [latitude1, setLatitude1] = useState(0);
  const [longitude1, setLongitude1] = useState(0);

  const [latitude2, setLatitude2] = useState(0);
  const [longitude2, setLongitude2] = useState(0);

  const [selectedDelivery, setSelectedDelivery] = useState(Object.create(null))


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
        setDelivery,
        latitude1,
        setLatitude1,
        longitude1,
        setLongitude1,
        latitude2,
        setLatitude2,
        longitude2,
        setLongitude2,
        selectedDelivery,
        setSelectedDelivery
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
