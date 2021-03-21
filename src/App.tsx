import React from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { TabsPanel } from "./components/TabsPanel";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App";
import { useSelector } from "react-redux";
import { ApplicationState } from "./app/store";
import { defaultPath } from "./utils/constants";

const App: () => JSX.Element = () => {
  const { items, tabs } = useSelector((state: ApplicationState) => state);
  const predefinedTabTitles = tabs
    .filter((tab) => tab.predefined)
    .map((tab) => tab.title);
  const usedTags = items.reduce((acc: string[], cur) => {
    cur.tags.forEach((tag) => {
      if (!acc.some((accumElement) => accumElement === tag.title)) {
        acc.push(tag.title);
      }
    });
    return acc;
  }, []);
  const availableTabTitles = predefinedTabTitles.concat(usedTags);
  const displayTabs = tabs.filter((tab) =>
    availableTabTitles.includes(tab.title)
  );
  return (
    <div>
      <AddLink />
      <SubmitLink />
      <Message />
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${defaultPath}`} />
        </Route>
        <Route
          path={"/:tabName"}
          render={({ location }) => {
            const tabLocation = location.pathname
              .replace("/", "")
              .replace("_", " ");
            if (displayTabs.find((tab) => tab.title === tabLocation)) {
              return <TabsPanel displayTabs={displayTabs} />;
            }
            return <Redirect to={`/${defaultPath}`} />;
          }}
        />
      </Switch>
    </div>
  );
};
export default withRouter(App);
