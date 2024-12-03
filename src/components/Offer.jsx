import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Buy } from "./Buy";
import { Footer } from "./Footer";
import { Modal } from "./Modal";

const Offer = () => {
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
      <Buy />
      <Footer />
    </>
  );
};

export default Offer;
