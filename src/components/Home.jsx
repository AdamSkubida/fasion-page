import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Gallery } from "./Gallery";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SocialMedia } from "./SocialMedia";
import { PricingTable } from "./PricingTable";
// import { Advert } from "./Advert";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adOpen, setAdOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandle = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // const closeAdHandler = () => {
  //   setAdOpen(false);
  // };

  return (
    <>
      <Header onClick={openModalHandler} />
      {modalOpen && <Modal onClose={closeModalHandle} />}
      <SocialMedia />
      {/* {adOpen && <Advert onClose={closeAdHandler} />} */}
      <Gallery />
      <PricingTable />
      <Footer />
    </>
  );
};

export default Home;
