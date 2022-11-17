import styled, { css } from "styled-components";
import { Colors } from "../../utils/styled";

export const Wrapper = styled.button<ButtonProps>`
  background-color: ${({ variant, theme }) =>
    !!variant ? Colors[variant] : theme.brand.primary.main.value};

  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      border: 1px solid red;
    `}
`;
