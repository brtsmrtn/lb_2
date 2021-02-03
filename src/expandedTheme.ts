import "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    1: Palette["primary"];
    2: Palette["primary"];
    3: Palette["primary"];
    4: Palette["primary"];
    5: Palette["primary"];
    6: Palette["primary"];
    7: Palette["primary"];
    8: Palette["primary"];
    9: Palette["primary"];
    10: Palette["primary"];
    11: Palette["primary"];
  }
  interface PaletteOptions {
    1: PaletteOptions["primary"];
    2: PaletteOptions["primary"];
    3: PaletteOptions["primary"];
    4: PaletteOptions["primary"];
    5: PaletteOptions["primary"];
    6: PaletteOptions["primary"];
    7: PaletteOptions["primary"];
    8: PaletteOptions["primary"];
    9: PaletteOptions["primary"];
    10: PaletteOptions["primary"];
    11: PaletteOptions["primary"];
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
  palette: {
    1: {
      main: "pink",
    },
    2: {
      main: "blue",
    },
    3: {
      main: "purple",
    },
    4: {
      main: "indigo",
    },
    5: {
      main: "deepPurple",
    },
    6: {
      main: "cyan",
    },
    7: {
      main: "teal",
    },
    8: {
      main: "lime",
    },
    9: {
      main: "yellow",
    },
    10: {
      main: "amber",
    },
    11: {
      main: "brown",
    },
  },
});
