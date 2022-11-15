import React from "react";
import { HeaderBackGround,DivContainer } from "./styles";
import { CarrefourLogo } from "../../assets/SVG";
import Avatar from "../Avatar";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header () {
    return (

    <HeaderBackGround>
        <CarrefourLogo />
        <DivContainer>
            <Avatar />
            <Button variant="text" endIcon={<KeyboardArrowDownIcon />}>Emanuel Agape</Button>
        </DivContainer>
    </HeaderBackGround>


    )
}

export default Header;