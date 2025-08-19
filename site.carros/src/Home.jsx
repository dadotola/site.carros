import Content from "./Pages/Content";
import Card from "./Pages/Card";
function Home() {
  return (
    <div>
      <Content />
      <section className="section">
        <Card
          nome="Ferrari 458 Italia"
          imagem="/imagens.projetos/image 19.svg"
          tipo="Coupe"
          motor="4.5l V8"
          cor="SCzerwony"
          potencia="570 koni"
          preco="1990"
        />
        <Card
          nome="Porsche 718 Cayman"
          imagem="/imagens.projetos/image 3.svg"
          tipo="Coupe"
          motor="2.0l Turbo"
          cor="Żółty"
          potencia="300 koni"
          preco="990"
        />
        <Card
          nome="Mercedes A45 AMG"
          imagem="/imagens.projetos/image 5.svg"
          tipo="Hothatch"
          motor="2.0l Turbo"
          cor="Żółty"
          potencia="421 koni"
          preco="990"
        />
        <Card
          nome="BMW M4"
          imagem="/imagens.projetos/image 7.svg"
          tipo="Coupe"
          motor="3.0l Twin Turbo"
          cor="Złoty"
          potencia="450 koni"
          preco="990"
        />
        <Card
          nome="Nissan GT-R"
          imagem="/imagens.projetos/image 8.svg"
          tipo="Coupe"
          motor="3.8l Twin Turbo"
          cor="Pomarańczowy"
          potencia="570 koni"
          preco="1890"
        />
        <Card
          nome="BMW M5 Competition"
          imagem="/imagens.projetos/image 6.svg"
          tipo="Coupe"
          motor="4.4 Twin Turbo"
          cor="Granatowy"
          potencia="625 koni"
          preco="1990"
        />
      </section>
    </div>
  );
}

export default Home;
