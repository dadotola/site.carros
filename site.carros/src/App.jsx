import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card"
import Home from "./Home";
import "./header.css";
import "./content.css";
import "./card.css";
import "./footer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComuniqueSeConosco from "./Pages/ComuniqueSeConosco";
import NossoEmail from "./Pages/NossoEmail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path="/"element={<Home />}></Route>
          <Route path="/ComuniqueSeConosco" element={<ComuniqueSeConosco />} ></Route>
          <Route path="/NossoEmail" element={<NossoEmail />}></Route>
        </Routes>
      </BrowserRouter>
      

      <Footer />
    </>
  );
}

export default App;
