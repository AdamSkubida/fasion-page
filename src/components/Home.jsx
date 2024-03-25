import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Modal } from "./Modal";

const Home = () => {
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
      {modalOpen && <Modal onClose={closeModalHandle} />}
      <Main />
      <Footer />
    </>
  );
};

export default Home;
