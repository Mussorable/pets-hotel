import axios, { AxiosInstance } from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Owners from "./Owners";

function App() {
  const [isUpdated, setIsUpdated] = useState(false);
  const api: AxiosInstance = axios.create({
    baseURL:
      "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home api={api} isUpdated={isUpdated} />} />
          <Route
            path="/pet-owners"
            element={<Owners api={api} isUpdated={isUpdated} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
