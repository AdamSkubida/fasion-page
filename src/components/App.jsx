import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Me from "./Me.jsx";
import Offer from "./Offer.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
    </>
  );
};

export default App;
