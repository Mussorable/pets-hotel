import axios, { AxiosInstance } from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Owners from "./Owners";

function App() {
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
          <Route path="/" element={<Home api={api} />} />
          <Route path="/owners" element={<Owners api={api} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
