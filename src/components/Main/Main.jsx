import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";

import { toast } from "react-toastify";

const Main = () => {
  const [name, setName] = useState("");
  const [originAddress, setOriginAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [date, setDate] = useState("");

  const notify = () =>
    toast("✅ Entrega criada", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const errorNotify = () =>
    toast("❌ Erro ao criar entrega", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const createDelivery = (delivery) => {
    fetch("https://desafio-unicad-backend.onrender.com/deliveries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(delivery),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) notify();
        
      })
      .catch((error) => {
        if (error) errorNotify();
        console.error("Erro ao criar entrega:", error);
      });
    setName("");
    setOriginAddress("");
    setDeliveryAddress("");
    setDate("");
  };

  return (
    <>
      <Header />
      <Form
        name={name}
        originAddress={originAddress}
        deliveryAddress={deliveryAddress}
        date={date}
        setName={setName}
        setOriginAddress={setOriginAddress}
        setDeliveryAddress={setDeliveryAddress}
        setDate={setDate}
        handleCreateDelivery={createDelivery}
      />
    </>
  );
};

export default Main;
