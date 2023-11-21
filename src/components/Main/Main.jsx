import { useContext } from "react";
import { MyContext } from "../../context/application.context";

import Form from "../Form/Form";
import Header from "../Header/Header";

import { toast } from "react-toastify";
import List from "../List/List";

const Main = ({ openRegister, setOpenRegister, openList, setOpenList }) => {
  
  const { setName, setOriginAddress, setDeliveryAddress, setDate } = useContext(MyContext);

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
      <Header setOpenRegister={setOpenRegister} setOpenList={setOpenList} openRegister={openRegister}/>
      {openRegister === true ? (
        <>
          <Form handleCreateDelivery={createDelivery} />
        </>
      ) : openList === true ? (
        <List />
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
