import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";
import { Button } from "../button";
import Input from "../input";

import { Container, StyledFormContainer } from "./styles";

const FormLogin: React.FC = () => {
  const formRef = React.useRef({} as any);
  const navigate = useNavigate();
  return (
    <Container>
      <h3>Login</h3>
      <StyledFormContainer
        onSubmit={() => console.log("submited")}
        ref={formRef}
      >
        <Input label="Usuario" name="username" placeholder="Digitar usuario" />
        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="Digitar senha"
        />
        <div>
          <span>Esqueci minha senha</span>
        </div>
        <Button layout={ButtonVariation.PRIMARY}>Entrar</Button>
      </StyledFormContainer>
      <span>Ainda nao possui conta?</span>
      <Button
        layout={ButtonVariation.GAYSCALE}
        onClick={() => navigate("/register")}
      >
        Cadastrar
      </Button>
    </Container>
  );
};

export default FormLogin;
