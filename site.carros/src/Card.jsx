function Card({ nome, imagem, tipo, motor, cor, potencia, preco }) {
  return (
    <>
    
      <card>
        <div className="card">
          <h2>{nome}</h2>

          <div className="categoria">
            <img className="car" src={imagem} alt={nome}></img>
            <ul>
              <li>
                <img src="imagens.projetos/Group 2.svg"></img>
                {tipo}
              </li>
              <li>
                <img src="imagens.projetos/Group 1.svg"></img>
                {motor}
              </li>
              <li>
                <img src="imagens.projetos/Group 3.svg"></img>
                {cor}
              </li>
              <li>
                <img src="imagens.projetos/Group 4.svg"></img>
                {potencia}
              </li>
            </ul>
          </div>
          <p className="preco">Wynajem Cena Brutto: {preco}zł</p>
        </div>
      </card>
    </>
  );
}

export default Card;
