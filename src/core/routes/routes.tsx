import React from "react";
import { useAuth } from "../providers/Auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
