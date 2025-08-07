function Header() {
  return (
    <>
      <header>
        <div className="background-top">
        <div className="header-contact">
          <img src="./imagens.projetos/Vector.svg" alt="telefone" />
            <p className="contact">comunique-se conosco</p>
            <p className="number">+48 501 140 391</p>
          </div>
          <div />
          <div className="header-mail">
            <img src="./imagens.projetos/flame-svg.svg" alt="logo" />
            <div>
            <img src="./imagens.projetos/Group 10.svg" alt="item" />
            <p className="comunicacao">nosso e-mail abaixo</p>
            <p className="email">biuro@sexycars.pl</p>
            </div>
            
          </div>
        </div>

        <nav></nav>
      </header>
    </>
  );
}

export default Header;
