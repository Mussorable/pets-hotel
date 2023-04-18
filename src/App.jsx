import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Pets from "./Pets";
import PetOwners from "./PetOwners";


function App() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pets" element={<Pets />}></Route>
            <Route path="/pet-owners" element={<PetOwners />}></Route>
        </Routes>
    </BrowserRouter>;
}

export default App;