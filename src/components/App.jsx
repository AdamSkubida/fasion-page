import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Me from "./Me.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<Me />} />
      </Routes>
    </>
  );
};

export default App;
