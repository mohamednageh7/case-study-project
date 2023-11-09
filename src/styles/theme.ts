import { Direction, PaletteMode } from "@mui/material";

const primMain = "#041656";
const primLight = "#000747";
const primDark = "#041656";

const secMain = "#ffffff";
const secLight = "#F1F1F1";
const secDark = "#F1F1F1";

const errorMain = "#EB5757";
const errorDark = "#EB5757";

const successMain = "#4ED964";
const sucessDark = "#4ED964";

const textPrimary = "#828282";
const textSecondary = "#3497F9";

declare module "@mui/material/styles" {
  interface Theme {
    direction: Direction | string;
  }
  interface ThemeOptions {
    direction: Direction | string;
  }

  interface Palette {
    general: {};
  }

  interface PaletteOptions {
    general?: {};
  }
}

 const themeConfig = (mode: PaletteMode, direction: Direction) => {
  return {
    direction: direction,
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? primMain : primDark,
        light: primLight,
      },
      secondary: {
        main: mode === "light" ? secMain : secDark,
        light: secLight,
      },
      error: {
        main: mode === "light" ? errorMain : errorDark,
      },
      success: {
        main: mode === "light" ? successMain : sucessDark,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
      general: {},
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 894,
        md: 1174,
        lg: 1290,
        xl: 1800,
      },
    },
  };
};

export default themeConfig