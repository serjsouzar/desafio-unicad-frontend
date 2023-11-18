import { GlobalStyle } from "./GlobalStyles";
import Main from "./components/Main/Main";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [openRegister, setOpenRegister] = useState(true);
  const [openList, setOpenList] = useState(false);

  return (
    <>
      <Main openRegister={openRegister} setOpenRegister={setOpenRegister} openList={openList} setOpenList={setOpenList} />
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
    </>
  );
}

export default App;
