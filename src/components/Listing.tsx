import React from "react";
import { ListingItem } from "./ListingItem";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../app/store";
import { Tab as TabPanel, Tabs } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { selectTab } from "../features/tabs";
import { ListItem } from "../types/ListItem";
import { COLORS } from "../utils/constants";

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
  },
}));

type ItemsToTabConnectorType = {
  index: number;
  title: string;
  alwaysVisible: boolean;
  coloredWith: string;
  selected: boolean;
  items: ListItem[];
};

export const Listing: () => JSX.Element = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { items, tabs } = useSelector((state: ApplicationState) => state);
  const itemsToTabConnector: ItemsToTabConnectorType[] = [];
  for (let i = 0; i < tabs.length; i++) {
    let updatedItems = [];
    if (i === 0) {
      updatedItems = [...items.filter((item) => !item.alreadyRead)];
    } else if (i === 1) {
      updatedItems = [...items.filter((item) => item.alreadyRead)];
    } else {
      updatedItems = [
        ...items.filter((item) =>
          item.tags.find((tag) => tag.title === tabs[i].title)
        ),
      ];
      console.log(updatedItems);
    }
    itemsToTabConnector.push({
      items: [...updatedItems],
      ...tabs[i],
    });
  }
  console.log(itemsToTabConnector);
  const selectedTab = itemsToTabConnector.find((tab) => tab.selected);
  const selectedTabIndex = selectedTab ? selectedTab.index : 0;
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTabIndex}
        onChange={(event, newTabIndex) => {
          dispatch(selectTab(newTabIndex));
        }}
        aria-label="Vertical tabs example"
        indicatorColor="primary"
        className={classes.tabs}
      >
        {itemsToTabConnector.map((tab) => {
          let className = classes.tab;
          if (tab.coloredWith) {
            className += ` chip-${tab.index - 1}`;
          }
          if ((tab.coloredWith && tab.items.length != 0) || tab.index < 2) {
            return (
              <TabPanel
                key={tab.index}
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
      {itemsToTabConnector.map((tab) => (
        <div
          role="tabpanel"
          hidden={selectedTabIndex !== tab.index}
          id={`vertical-tabpanel-${tab.index}`}
          aria-labelledby={`vertical-tab-${tab.index}`}
          key={tab.index}
        >
          <table>
            <thead>
              {tab.items.length ? (
                <tr>
                  <th>URL</th>
                  <th>Date</th>
                </tr>
              ) : (
                <tr></tr>
              )}
            </thead>
            <tbody>
              {tab.items.map((item) => (
                <ListingItem item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
