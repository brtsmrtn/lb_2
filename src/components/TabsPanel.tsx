import React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { COLORS } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { TabType } from "../types/Tab";
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
      "& .MuiButtonBase-root.chip-1": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[0]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-1:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[0]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-2": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[1]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-2:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[1]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-3": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[2]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-3:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[2]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-4": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[3]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-4:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[3]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-5": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[4]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-5:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[4]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-6": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[5]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-6:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[5]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-7": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[6]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-7:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[6]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-8": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[7]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-8:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[7]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-9": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[8]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-9:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[8]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-10": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[9]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-10:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[9]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-11": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[10]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-11:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[10]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-12": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[11]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-12:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[11]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-13": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[12]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-13:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[12]} 10%)`,
      },
      "& .MuiButtonBase-root.chip-14": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[13]} 100%)`,
      },
      "& .MuiButtonBase-root.chip-14:hover": {
        background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[13]} 10%)`,
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
    background: `linear-gradient(90deg, rgba(255,255,255,0.5) 25%, ${COLORS[14]} 100%)`,
    width: 200,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    justifyItems: "flex-end",
    justifySelf: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    textTransform: "none",
    "&:focus": {
      background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${COLORS[14]} 10%)`,
    },
    "&:hover": {
      background: `linear-gradient(90deg, rgba(255,255,255,0.25) 0%, ${COLORS[14]} 10%)`,
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
  const selectedTabIndex = selectedTab ? selectedTab.index : 0;
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTabIndex}
        aria-label="Tabs"
        indicatorColor="primary"
        className={classes.tabs}
      >
        {displayTabs.map((tab) => {
          if (tab) {
            let className = classes.tab;
            if (tab.coloredWith) {
              className += ` chip-${tab.index - 1}`;
            }
            return (
              <Tab
                key={tab.index}
                component={Link}
                to={`/${tab.title.replace(" ", "_")}`}
                label={`${tab.title}`}
                value={tab.index}
                id={`vertical-tab-${tab.index}`}
                aria-controls={`vertical-tabpanel-${tab.index}`}
                className={className}
              />
            );
          }
        })}
      </Tabs>
      <TabsContent
        displayTabs={displayTabs}
        selectedTabIndex={selectedTabIndex}
      />
    </div>
  );
};
