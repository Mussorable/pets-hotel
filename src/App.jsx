import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Pets from "./Pets";


function App() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pets" element={<Pets />}></Route>
        </Routes>
    </BrowserRouter>;
}

export default App;