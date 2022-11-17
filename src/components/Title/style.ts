import styled from "styled-components";

export type Props = {
  size: "small" | "large";
};

const Texto = styled.p`
  color: ${(theme) => theme.theme.success.main.value};
  font-size: ${(theme) => theme.theme.fontSizes.xxl.value}px;
`;

export default Texto;
