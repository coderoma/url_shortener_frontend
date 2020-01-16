import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage, AuthPage, CreatePage, DetailPage } from "./pages/";
import { UseRoutes } from "./interfaces";

export const useRoutes: UseRoutes = isAuthenticated => {
  return isAuthenticated ? (
    <Switch>
      <Route path="/links" exact>
        <LinksPage />
      </Route>
      <Route path="/create" exact>
        <CreatePage />
      </Route>
      <Route path="/detail/:id" exact>
        <DetailPage />
      </Route>
      <Redirect to="/create" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
