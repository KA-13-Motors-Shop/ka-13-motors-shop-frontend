import React from "react";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";
import { AccountType } from "../../enum/register-form-toggle-variations";
import { Button } from "../button";
import Input from "../input";

import {
  Container,
  StyledFormContainer,
  StyledFormSection,
  StyledRoot,
  StyledItem,
} from "./styles";

const RegisterForm: React.FC = () => {
  const [accountType, setAccountType] = React.useState(AccountType.BUYER);
  const formRef = React.useRef({} as any);
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <StyledFormContainer ref={formRef} onSubmit={handleSubmit}>
        <h3>Cadastro</h3>
        <StyledFormSection>
          <h4>Informacoes pessoais</h4>
          <Input label="Nome" name="name" placeholder="Ex: Samuel Leão" />
          <Input
            label="Email"
            name="email"
            placeholder="Ex: samuel@kenzie.com.br"
          />
          <Input label="CPF" name="cpf" placeholder="000.000.000-00" />
          <Input label="Celular" name="phone" placeholder="(DDD) 90000-0000" />
          <Input
            label="Data de Nascimento"
            name="birth_date"
            placeholder="00/00/00"
          />
          <Input
            label="Descricao"
            name="description"
            placeholder="Digitar descrição"
          />
        </StyledFormSection>
        <StyledFormSection>
          <h4>Informacoes de endereco</h4>
          <Input label="CEP" name="zip_code" placeholder="00000.000" />
          <div>
            <Input label="Estado" name="state" placeholder="Digitar Estado" />
            <Input label="Cidade" name="city" placeholder="Digitar cidade" />
          </div>
          <Input label="Rua" name="street" placeholder="Digitar rua" />
          <div>
            <Input label="Número" name="number" placeholder="Digitar número" />
            <Input
              label="Complemento"
              name="complement"
              placeholder="Ex: apart 307"
            />
          </div>
        </StyledFormSection>
        <StyledFormSection>
          <h4>Tipo de conta</h4>
          <StyledRoot
            type="single"
            onValueChange={(value: AccountType) => {
              setAccountType(value);
            }}
            defaultValue={accountType}
          >
            <Input
              label="Tipo de Conta"
              name="account_type"
              value={accountType}
              id="inputForm"
            />
            <StyledItem value={AccountType.BUYER}>
              <Button
                layout={ButtonVariation.PRIMARY}
                type="button"
                name="account_type"
                value={accountType}
              >
                Comprador
              </Button>
            </StyledItem>
            <StyledItem value={AccountType.SELLER}>
              <Button
                layout={ButtonVariation.PRIMARY}
                type="button"
                name="account_type"
                value={accountType}
              >
                Vendedor
              </Button>
            </StyledItem>
          </StyledRoot>
          <Input
            label="Senha"
            name="password"
            placeholder="Digitar senha"
            type="password"
          />
          <Input
            label="Confirmar Senha"
            name="confirm_password"
            placeholder="Digitar senha"
            type="password"
          />
        </StyledFormSection>
        <Button
          layout={ButtonVariation.PRIMARY}
          type="submit"
          id="submitButton"
        >
          Finalizar cadastro
        </Button>
      </StyledFormContainer>
    </Container>
  );
};

export default RegisterForm;
