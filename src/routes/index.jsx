/* eslint-disable no-unused-vars */
// @ts-nocheck
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auths";

export function Routes() {
  const { user } = useAuth();
  return(
    <BrowserRouter>
      { user ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}