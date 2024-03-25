import React, { useState } from "react";
import { Header } from "./Header";
import { Gallery } from "./Gallery";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SocialMedia } from "./SocialMedia";

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
      <SocialMedia />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
