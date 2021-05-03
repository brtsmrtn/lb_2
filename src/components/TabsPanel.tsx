import React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import { Tab as TabType } from "../types/Tab";
import { TabsContent } from "./TabsContent";

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: "#FFF000",
  },
  indicator: {
    backgroundColor: "blue",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 1px 3px 1px rgba(20,20,20, .3)",
    display: "flex",
    height: 600,
    "& .MuiTabs-scroller": {
      "& span.MuiTabs-indicator": {
        backgroundColor: "black",
      },
      "& .MuiButtonBase-root": {
        visibility: "visible",
      },
      "& .MuiButtonBase-root span:nth-child(1)": {
        backgroundColor: "rgba(255,255,255,1)",
        color: "rgba(0, 0, 0, 1)",
        border: "none",
        height: "32px",
        width: "auto",
        display: "inline-flex",
        outline: 0,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        borderRadius: "16px",
        verticalAlign: "middle",
        justifyContent: "center",
        textDecoration: "none",
        overflow: "hidden",
        paddingLeft: "12px",
        paddingRight: "12px",
        textOverflow: "ellipsis",
        maxWidth: "auto",
        cursor: "pointer",
      },
      "& .MuiButtonBase-root:nth-child(1) span:nth-child(1)": {
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      "& .MuiButtonBase-root:nth-child(2) span:nth-child(1)": {
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      "& .MuiButtonBase-root:nth-child(1)": {
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      "& .MuiButtonBase-root:nth-child(2)": {
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      "& .MuiButtonBase-root.chip-b3e5fc": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #b3e5fc 100%)`,
      },
      "& .MuiButtonBase-root.chip-b3e5fc:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #b3e5fc 10%)`,
      },
      "& .MuiButtonBase-root.chip-ffcdd2": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #ffcdd2 100%)`,
      },
      "& .MuiButtonBase-root.chip-ffcdd2:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #ffcdd2 10%)`,
      },
      "& .MuiButtonBase-root.chip-dcedc8": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #dcedc8 100%)`,
      },
      "& .MuiButtonBase-root.chip-dcedc8:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #dcedc8 10%)`,
      },
      "& .MuiButtonBase-root.chip-c5cae9": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #c5cae9 100%)`,
      },
      "& .MuiButtonBase-root.chip-c5cae9:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #c5cae9 10%)`,
      },
      "& .MuiButtonBase-root.chip-cfd8dc": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #cfd8dc 100%)`,
      },
      "& .MuiButtonBase-root.chip-cfd8dc:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #cfd8dc 10%)`,
      },
      "& .MuiButtonBase-root.chip-fff9c4": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #fff9c4 100%)`,
      },
      "& .MuiButtonBase-root.chip-fff9c4:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #fff9c4 10%)`,
      },
      "& .MuiButtonBase-root.chip-d1c4e9": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #d1c4e9 100%)`,
      },
      "& .MuiButtonBase-root.chip-d1c4e9:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #d1c4e9 10%)`,
      },
      "& .MuiButtonBase-root.chip-ffccbc": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #ffccbc 100%)`,
      },
      "& .MuiButtonBase-root.chip-ffccbc:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #ffccbc 10%)`,
      },
      "& .MuiButtonBase-root.chip-f0f4c3": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #f0f4c3 100%)`,
      },
      "& .MuiButtonBase-root.chip-f0f4c3:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #f0f4c3 10%)`,
      },
      "& .MuiButtonBase-root.chip-b2ebf2": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #b2ebf2 100%)`,
      },
      "& .MuiButtonBase-root.chip-b2ebf2:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #b2ebf2 10%)`,
      },
      "& .MuiButtonBase-root.chip-d7ccc8": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #d7ccc8 100%)`,
      },
      "& .MuiButtonBase-root.chip-d7ccc8:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #d7ccc8 10%)`,
      },
      "& .MuiButtonBase-root.chip-ffecb3": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #ffecb3 100%)`,
      },
      "& .MuiButtonBase-root.chip-ffecb3:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #ffecb3 10%)`,
      },
      "& .MuiButtonBase-root.chip-f8bbd0": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #f8bbd0 100%)`,
      },
      "& .MuiButtonBase-root.chip-f8bbd0:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #f8bbd0 10%)`,
      },
      "& .MuiButtonBase-root.chip-b2dfdb": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #b2dfdb 100%)`,
      },
      "& .MuiButtonBase-root.chip-b2dfdb:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #b2dfdb 10%)`,
      },
    },
  },
  tabs: {
    alignItems: "flex-end",
    borderRight: `1px solid rgba(240,240,240,1)`,
    inkBarStyle: { background: "#000", height: "5px", marginTop: "-5px" },
  },
  tab: {
    opacity: 1,
    background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, #f5f5f5 100%)`,
    width: 200,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    justifyItems: "flex-end",
    justifySelf: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    textTransform: "none",
    "&:focus": {
      background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, #f5f5f5 10%)`,
    },
    "&:hover": {
      background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #f5f5f5 10%)`,
      opacity: 1,
    },
    // "&$selected": {
    //   opacity: 0,
    // },
    "& span.MuiTab-wrapper, & span.MuiTouchRipple-root": {
      alignItems: "flex-end",
    },
    textColor: "",
  },
}));

export type TabsPanelProps = {
  displayTabs: TabType[];
};
export const TabsPanel: (props: TabsPanelProps) => JSX.Element = ({
  displayTabs,
}: TabsPanelProps) => {
  const classes = useStyles();
  const { tabName } = useParams<{ tabName: string }>();
  const selectedTabTitle = decodeURIComponent(tabName).replace("_", " ");
  const selectedTab = displayTabs.find((tab) => tab.title === selectedTabTitle);
  const selectedTabId = selectedTab ? selectedTab.id : displayTabs[0].id;
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTabId}
        aria-label="Tabs"
        indicatorColor="primary"
        className={classes.tabs}
      >
        {displayTabs.map((tab) => {
          if (tab) {
            let className = classes.tab;
            if (tab.color) {
              className += ` chip-${tab.color.substring(1)}`;
            }
            return (
              <Tab
                key={tab.id}
                component={Link}
                to={`/${tab.title.replace(" ", "_")}`}
                label={`${tab.title}`}
                value={tab.id}
                id={`vertical-tab-${tab.id}`}
                aria-controls={`vertical-tabpanel-${tab.id}`}
                className={className}
              />
            );
          }
        })}
      </Tabs>
      <TabsContent displayTabs={displayTabs} selectedTabIndex={selectedTabId} />
    </div>
  );
};
