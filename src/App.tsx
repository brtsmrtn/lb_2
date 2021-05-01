import React from "react";
import "./App";
import { ProfilePage } from "./components/ProfilePage";
import { Login } from "./components/Login";
import { Route, Switch, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationState } from "./app/store";
const App: () => JSX.Element = () => {
  const { userData } = useSelector((state: ApplicationState) => state);
  return userData.isAuthenticated ? (
    <ProfilePage />
  ) : (
    <Switch>
      <Route exact component={Login} />
    </Switch>
  );
};
export default withRouter(App);
