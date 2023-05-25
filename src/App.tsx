import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Owners from "./Owners";

function App() {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isUpdated={isUpdated} />} />
          <Route
            path="/pet-owners"
            element={<Owners isUpdated={isUpdated} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
