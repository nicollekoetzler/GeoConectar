import styled from "@emotion/styled";
import React from "react";
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineUser } from "react-icons/ai";


export default function HeaderLayout() {
    return(
        <TopBar>
            <h1>GeoConectar</h1>
            <TopBarLinks>
                <h3>Meus Serviços</h3>
                <h3>Divulgue um serviço</h3>
                <h3>Ofereça seu serviço</h3>
            </TopBarLinks>
            <TopBarRightLinks>
                <Trash/>
                <User/>
            </TopBarRightLinks>
        </TopBar>
    )
}

const TopBar = styled.div`
height: 80px;
width: 100%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #CDCDCD;
padding: 0px 64px 0px 64px;

h1 {
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #4E693C;
    width: 25%;
    cursor: pointer;
}
`

const TopBarLinks = styled.div`
display: flex;
justify-content: center;
width: 50%;

h3 {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
}

h3:nth-child(1) {
    margin-right: 32px;
}

h3:nth-child(2) {
    margin-right: 32px;
}

h3:hover {
    color: #4E693C;
}
`

const TopBarRightLinks = styled.div`
    display: flex;
    justify-content: end;
    width: 25%;
`

const Trash = styled(BsChatDots)`
    margin-right: 16px;
    font-size: 24px;
    color: #585858;
    cursor: pointer;
`

const User = styled(AiOutlineUser)`
    font-size: 26px;
    color: #585858;
    cursor: pointer;
`