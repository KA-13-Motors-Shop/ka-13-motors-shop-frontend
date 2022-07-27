import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoutes;
