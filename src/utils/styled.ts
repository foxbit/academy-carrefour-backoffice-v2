import themeToken from "../theme/theme.token.json";
type theme = typeof themeToken;

const token = themeToken as theme;

export const Colors = {
  primary: token.brand.primary.main.value,
  secondary: token.brand.secondary.main.value,
  tertiary: token.brand.tertiary.purple.value
};
