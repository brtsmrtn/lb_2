import React from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { TabsPanel } from "./components/TabsPanel";
import { Redirect, Route, withRouter } from "react-router-dom";
import "./App";
import { useSelector } from "react-redux";
import { ApplicationState } from "./app/store";
import { defaultPath, pathPrefix } from "./utils/constants";

const App: () => JSX.Element = () => {
  const { items, tabs } = useSelector((state: ApplicationState) => state);
  const predefinedTabs = tabs
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
  const availableTabsTitles = predefinedTabs.concat(usedTags);
  const displayTabs = tabs.filter((tab) =>
    availableTabsTitles.includes(tab.title)
  );
  return (
    <div>
      <AddLink />
      <SubmitLink />
      <Message />
      <Route exact path={pathPrefix}>
        <Redirect to={`${pathPrefix}${defaultPath}`} />
      </Route>
      <Route
        exact
        path={`${pathPrefix}:tabName`}
        render={({ location }) => {
          const tabLocation = location.pathname
            .replace(pathPrefix, "")
            .replace("_", " ");
          if (displayTabs.find((tab) => tab.title === tabLocation)) {
            return <TabsPanel displayTabs={displayTabs} />;
          }
          return <Redirect to={`${pathPrefix}${defaultPath}`} />;
        }}
      />
    </div>
  );
};
export default withRouter(App);
