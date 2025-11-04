import { createTheme, Theme } from "@mui/material";
import theme from "./theme.mui";

export const getPulgaTheme = (customTheme?: Partial<Theme>): Theme => {
  return createTheme({
    ...theme,
    ...customTheme,
  });
};
