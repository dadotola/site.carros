import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import ComuniqueSeConosco from "./Pages/ComuniqueSeConosco";
import Info from "./Pages/Info";
import "./style/header.css";
import "./style/global.css";
import "./style/content.css";
import "./style/card.css";
import "./style/info.css";
import "./style/footer.css";
import "./style/comuniqueSeConosco.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ComuniqueSeConosco" element={<ComuniqueSeConosco />} />
          <Route path="/Info" element={<Info />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
