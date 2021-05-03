import React from "react";
import "./App";
import { Login } from "./components/Login";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationState } from "./app/store";
import { defaultPath } from "./utils/constants";
import { Layout } from "./components/Layout";

const App: () => JSX.Element = () => {
  const { userData } = useSelector((state: ApplicationState) => state);
  return userData.isAuthenticated ? (
    <Switch>
      <Route exact path="/">
        <Redirect to={`${defaultPath}`} />
      </Route>
      <Route
        path={"/:tabName"}
        render={({ location }) => {
          return <Layout location={location} />;
        }}
      />
    </Switch>
  ) : (
    <Switch>
      <Route exact component={Login} />
    </Switch>
  );
};
export default withRouter(App);
