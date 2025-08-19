function ComuniqueSeConosco() {
  return (
    <>
      <body>
        <div className="titulo">
          <h1>Kontakt</h1>
          <p>SexyCars Wypożyczalnia Samochodów Sportowych i Luksusowych</p>
        </div>
        <div className="container">
          <div className="categorias">
            <p>
              <strong>Adres:</strong>
              <br />
              ul. Marii i Bolesława Wysłouchów 49/6
              <br />
              30-611 Kraków, Polska
              <br />
              Nip: 679-297-4323
            </p>

            <p>
              <strong>Dostępność:</strong>
              <br />
              Poniedziałek – Niedziela
              <br />
              od 08:00 do 22:00
            </p>
            <p>
              <strong>Telefon:</strong>
              <br />
              +48 501 140 391
            </p>

            <p>
              <strong>Mail:</strong>
              <br />
              biuro@sexycars.pl
            </p>
          </div>
          <div className="loca">
            <img src="./imagens.projetos/Screenshot_1 1.svg" alt="mapa"></img>
          </div>
        </div>
        <div className="avaliacao">
          <div className="bottom">
            <div className="perfil">
              <span className="avatar">B</span>
              <strong>Bruno KK</strong>
              <p>⭐⭐⭐⭐⭐ 6 dni temu 4opinie</p>
            </div>
            <div className="tex">
              <p>
                Jedna z lepszych wypożyczalni samochodów w Krakowie!
                Bezproblemowe wypożyczenie, jasne warunki, firma bardzo
                kontaktowa.
              </p>
              <button className="but">WIECEJ</button>
            </div>

            <img src="./imagens.projetos/image 29.svg" alt="map" />
          </div>
        </div>
      </body>
    </>
  );
}

export default ComuniqueSeConosco;
