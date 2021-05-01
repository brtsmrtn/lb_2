import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { ApplicationState } from "../app/store";
import { defaultPath } from "../utils/constants";
import { AddLink } from "./AddLink";
import { Message } from "./Message";
import { SubmitLink } from "./SubmitLink";
import { TabsPanel } from "./TabsPanel";
import { logoutUser } from "../features/user";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { popSnack } from "../features/snack";
import { Button } from "@material-ui/core";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ProfilePage: () => JSX.Element = () => {
  const dispatch = useDispatch();
  const { items, tabs, snack } = useSelector(
    (state: ApplicationState) => state
  );
  const predefinedTabTitles = tabs
    .filter((tab) => tab.predefined)
    .map((tab) => tab.title);
  const usedTags = items.reduce((acc: string[], cur) => {
    cur.tags &&
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
            return (
              <div>
                <AddLink />
                <SubmitLink />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Sign out
                </Button>
                <Message />
                <TabsPanel displayTabs={displayTabs} />
                <Snackbar
                  open={snack.snack}
                  autoHideDuration={5000}
                  onClose={() => dispatch(popSnack(false, snack.severity))}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Alert severity={snack.severity}>
                    {snack.severity === "success"
                      ? "Success"
                      : "Something went wrong!"}
                  </Alert>
                </Snackbar>
              </div>
            );
          }
          return <Redirect to={`/${defaultPath}`} />;
        }}
      />
    </Switch>
  );
};
