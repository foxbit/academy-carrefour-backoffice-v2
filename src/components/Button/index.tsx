import React from "react";
import styled from "styled-components";
import { BtnBase,BtnPrimary,BtnSecondary } from "./style";

declare type ButtonProps = { variant?: "primary" | "secondary" | "tertiary" };


function Button({ variant }: ButtonProps) {
  return(
    <Button type={variant} />
  )
}

export default Button;
