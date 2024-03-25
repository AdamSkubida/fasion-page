import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Me from "./Me.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/fasion-page/" element={<Home />} />
        <Route path="/fasion-page/Me" element={<Me />} />
      </Routes>
    </>
  );
};

export default App;
