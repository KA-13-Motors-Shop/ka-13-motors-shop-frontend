import React from "react";
import Card from "../../../components/card";
import Footer from "../../../components/footer";
import IntroContent from "../../../components/intro-content";
import SectionCards from "../../../components/section-cards";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    //TO DO:
    // - QUANDO FIZER O FETCH DOS LEILOES PASSAR OS DADOS COMO PROPS PARA O CARD E REFATORAR COM OS DADOS DINAMICOS
    <Container>
      <IntroContent />
      <SectionCards title="Leilao">
        <Card auction />
      </SectionCards>
      <SectionCards title="Carros">
        <Card />
      </SectionCards>
      <SectionCards title="Motos">
        <Card />
        <Card />
      </SectionCards>
      <Footer />
    </Container>
  );
};

export default Home;
