function Footer() {
  return (
    <>
      <footer>
        <div className="background-under">
          <div className="footer-top">
            <img src="./imagens.projetos/flame-svg.svg" alt="flame"></img>
            <div>
              <p className="text-footer">
                @2020 Sexy Cars All Rights Reserved.{" "}
              </p>
            </div>
          </div>
          <div className="footer-info">
            <div className="info-item">
              <img src="./imagens.projetos/Vector.svg" alt="phone"></img>
              <p className="contact-footer">Telefon: +48 501 140 391</p>
            </div>
            <div className="info-item">
              <img src="./imagens.projetos/Pin.svg" alt="pin"></img>
              <p className="loc">
                Lokalizacja: ul. Marii i Bolesława Wysłouchów 49/6, 30-611
                Kraków
              </p>
            </div>
            <div className="info-item">
              <img src="./imagens.projetos/Mail.svg" alt="mail-logo"></img>
              <p className="mail">Email: biuro@sexycars.pl</p>
            </div>
            <div>
              <p className="description">
                Auta sportowe na wynajem: Ferrari, Lamborghini, Bmw, Nissan,
                Ford, Audi, Porsche | Wypożyczalnia samochodów sportowych
                Kraków, Katowice, Warszawa, Wrocław, Rzeszów, Kielce,
                Częstochowa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
