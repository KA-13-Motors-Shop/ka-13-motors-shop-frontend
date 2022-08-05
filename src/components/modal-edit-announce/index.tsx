import React from "react";
import ModalHeader from "../header-modal";

import { Container, StyledItem, StyledRoot, StyledToggleDiv } from "./styles";

import { ButtonVariation } from "../../enum/button-variation";
import { Button } from "../button";
import { ModalOverlay } from "../modal-overlay";
import { TypeAnnounceVariation } from "../../enum/type-announce-variation";
import Input from "../input";

const ModalEditAnnounce: React.FC = () => {
  const [typeAnnouce, setTypeAnnouce] = React.useState(
    TypeAnnounceVariation.SALE
  );

  return (
    <ModalOverlay>
      <Container>
        <ModalHeader title="Editar anuncio" />
        <StyledToggleDiv>
          <h3>Tipo de anuncio</h3>
          <StyledRoot
            type="single"
            onValueChange={(value: TypeAnnounceVariation) => {
              setTypeAnnouce(value);
            }}
            defaultValue={typeAnnouce}
          >
            <StyledItem value={TypeAnnounceVariation.SALE}>
              <Button layout={ButtonVariation.PRIMARY}>Venda</Button>
            </StyledItem>
            <StyledItem value={TypeAnnounceVariation.AUCTION}>
              <Button layout={ButtonVariation.PRIMARY}>Leilao</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <div>
          <h3>Informacoes do veiculo</h3>
          <Input label="Titulo" name="title" />
        </div>
      </Container>
    </ModalOverlay>
  );
};

export default ModalEditAnnounce;
