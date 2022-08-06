import React from "react";
import ModalHeader from "../header-modal";

import { Container, StyledItem, StyledRoot, StyledToggleDiv } from "./styles";

import { ButtonVariation } from "../../enum/button-variation";
import { Button } from "../button";
import { ModalOverlay } from "../modal-overlay";
import {
  TypeAnnounceVariation,
  TypePublishedVariation,
  TypeVeicleVariation,
} from "../../enum/type-announce-variation";
import Input from "../input";

const ModalEditAnnounce: React.FC = () => {
  const [typeAnnouce, setTypeAnnouce] = React.useState(
    TypeAnnounceVariation.SALE
  );

  const [typeVeicle, setTypeVeicle] = React.useState(TypeVeicleVariation.CAR);

  const [typePublished, setTypePublished] = React.useState(
    TypePublishedVariation.NO
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
          <Input label="Ano" name="year" />
          <Input label="Quilometragem" name="km" />
          <Input label="Preco" name="price" />
          <Input label="Decricao" name="description" />
        </div>
        <StyledToggleDiv>
          <h3>Tipo de Veiculo</h3>
          <StyledRoot
            type="single"
            onValueChange={(value: TypeVeicleVariation) => {
              setTypeVeicle(value);
            }}
            defaultValue={typeVeicle}
          >
            <StyledItem value={TypeVeicleVariation.CAR}>
              <Button layout={ButtonVariation.PRIMARY}>Carro</Button>
            </StyledItem>
            <StyledItem value={TypeVeicleVariation.MOTOCYCLE}>
              <Button layout={ButtonVariation.PRIMARY}>Moto</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <StyledToggleDiv>
          <StyledRoot
            type="single"
            onValueChange={(value: TypePublishedVariation) => {
              setTypePublished(value);
            }}
            defaultValue={typePublished}
          >
            <StyledItem value={TypePublishedVariation.YES}>
              <Button layout={ButtonVariation.PRIMARY}>Sim</Button>
            </StyledItem>
            <StyledItem value={TypePublishedVariation.NO}>
              <Button layout={ButtonVariation.PRIMARY}>Nao</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
      </Container>
    </ModalOverlay>
  );
};

export default ModalEditAnnounce;
