import React from "react";

interface IAuthContext {
  token: string;
  isAuthenticated: boolean;
}

const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState(
    localStorage.getItem("@token:user") || ""
  );
  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
