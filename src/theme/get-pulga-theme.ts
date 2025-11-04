import { createTheme, Theme } from "@mui/material";
import theme from "./theme.mui";

const omitComponents = (customTheme?: Partial<Theme>): Partial<Theme> => {
  const { components, ...rest } = customTheme || {};
  return rest;
};

export const getPulgaTheme = (customTheme?: Partial<Theme>): Theme => {
  return createTheme({
    ...theme,
    ...omitComponents(customTheme),
  });
};
