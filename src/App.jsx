import { GlobalStyle } from "./GlobalStyles";
import Main from "./components/Main/Main";

import { useState } from "react";
import { MyContextProvider } from "./context/application.context";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  const [openRegister, setOpenRegister] = useState(true);
  const [openList, setOpenList] = useState(false);
  
  return (
    <MyContextProvider>
      <Main
        openRegister={openRegister}
        setOpenRegister={setOpenRegister}
        openList={openList}
        setOpenList={setOpenList}
      />
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </MyContextProvider>
  );
}

export default App;
