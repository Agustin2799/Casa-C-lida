
import Navbar2 from "./components/navbar2";
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./views/Home";




// Actualiza las importaciones

function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
