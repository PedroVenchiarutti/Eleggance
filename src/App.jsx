import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";

export const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
export default App;
