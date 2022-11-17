import "styled-components";
import theme from "./theme.token.json";

declare module "styled-components" {
  type themeToken = typeof theme;

  export interface DefaultTheme extends themeToken {}
}
