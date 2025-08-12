import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="background-top">
            <div>
              <img src="./imagens.projetos/Vector.svg" alt="telefone"></img>
            </div>
            <div className="header-contact">
              <Link className="contact" to="/ComuniqueSeConosco">
                comunique-se conosco
              </Link>
              <p className="number">+48 501 140 391</p>
            </div>
            <div>
              <img src="./imagens.projetos/flame-svg.svg" alt="logo"></img>
            </div>
            <div className="header-mail">
              <Link className="comunicacao" to="/NossoEmail">
                nosso e-mail abaixo
              </Link>
              <p className="email">biuro@sexycars.pl</p>
            </div>
            <div>
              <img src="./imagens.projetos/Group 10.svg" alt="item"></img>
            </div>
          </div>
          <div>
            <div className="background2">
                <div className="logo2">
                SexyCars<img src="./imagens.projetos/flame-svg.svg" alt="flame"></img>
                </div>
                <div className="info">
                  <p>Auta</p>
                  <p>Informacje</p>
                  <p>Kontakt</p>
                </div>
                <div className="logoscomunic">
                  <img src="./imagens.projetos/IG.svg" alt="insta"></img>
                  <img src="./imagens.projetos/FB.svg" alt="face"></img>
                  <img src="./imagens.projetos/YT.svg" alt="you"></img>
                </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
