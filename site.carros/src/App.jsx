import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import "./header.css"
import "./content.css"
import "./footer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComuniqueSeConosco from "./Pages/ComuniqueSeConosco"
import NossoEmail from "./Pages/NossoEmail"

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/ComuniqueSeConosco" element={<ComuniqueSeConosco />}></Route>
      <Route path="/NossoEmail" element={<NossoEmail/>}></Route>
    </Routes>
    </BrowserRouter>
    <Content />


      <Footer />
    </>
  );
}

export default App;
