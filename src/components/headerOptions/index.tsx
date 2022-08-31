import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../core/providers/Auth";
import { errorFeedback } from "../../utils/errorFeedback";
import GlobalLoader from "../loader";
import ProfileLogger from "../profile-logger";
import { StyledMenuOptions, StyledDivider } from "./styles";

type Props = JSX.IntrinsicElements["header"];

export const HeaderOptions: React.FC<Props> = ({ ...props }) => {
  const [user, setUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { isAuthenticated, fetchUserData } = useAuth();
  const navigate = useNavigate();
  const handleUserProfile = React.useCallback(async () => {
    setIsLoading(true);
    await fetchUserData()
      .then((res) => setUser(res.name))
      .catch(errorFeedback)
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  React.useEffect(() => {
    if (isAuthenticated) {
      handleUserProfile();
    }
  }, [handleUserProfile]);
  return (
    <StyledMenuOptions {...(props as any)}>
      <div className="categories">
        <span>Carros</span>
        <span>Motos</span>
        <span>Leilão</span>
      </div>
      <StyledDivider />
      {isAuthenticated ? (
        <ProfileLogger name={user} />
      ) : (
        <div className="user">
          <span onClick={() => navigate("/login")}>Fazer Login</span>
          <button onClick={() => navigate("/register")}>Cadastrar</button>
        </div>
      )}
      <GlobalLoader isLoading={isLoading} />
    </StyledMenuOptions>
  );
};
