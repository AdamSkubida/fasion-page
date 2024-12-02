import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SocialMedia } from "./SocialMedia";
import { PricingTable } from "./PricingTable";

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
      <Hero />
      <Main />
      <PricingTable />
      <Footer />
    </>
  );
};

export default Home;
