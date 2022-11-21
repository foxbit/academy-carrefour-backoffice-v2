import themeToken from "../theme/theme.token.json";

type theme = typeof themeToken;

const token = themeToken as theme;

export const Colors = {
  primary: token.brand.primary.main.value,
  primaryLight: token.brand.primary.light.value,
  primaryDark: token.brand.primary.dark.value,

  secondary: token.brand.secondary.main.value,
  secondaryLight: token.brand.secondary.light.value,
  secondaryDark: token.brand.secondary.dark.value,

  tertiary: token.brand.tertiary.purple.value,
};
