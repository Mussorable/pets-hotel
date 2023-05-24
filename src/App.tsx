import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Owners from "./Owners";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet-owners" element={<Owners />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
