import { useState } from "react";
import { Header } from "./Header/index.jsx";
import { Modal } from "./Modal/index.jsx";

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandle = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header onClick={openModalHandler} />
      {modalOpen && <Modal onClose={closeModalHandle} />}
    </>
  );
};

export default App;
