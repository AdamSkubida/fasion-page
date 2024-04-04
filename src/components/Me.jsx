import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { About } from "./About";
import { useState } from "react";

const Me = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandle = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header onClick={openModalHandler} />
      <About />
      {modalOpen && <Modal onClose={closeModalHandle} />}
      <Footer />
    </>
  );
};

export default Me;
