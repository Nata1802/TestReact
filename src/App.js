import logo from './logo.svg';
import './App.css';
import NavPan from "./Components/NavPan/NavPan";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <NavPan />
<BrowserRouter>
    <Routes>
            <Route path="/main/*" element={<Tecnologes />} />
    </Routes>
</BrowserRouter>
        <Tecnologes />
     </div>
  );
}

export default App;
