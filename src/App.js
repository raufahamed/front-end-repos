import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Homepage/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landingpage" element={<Main />} />
          <Route path="/profileCard" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
