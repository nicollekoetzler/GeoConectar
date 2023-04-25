import styled from "@emotion/styled";
import React from "react";
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link"


export default function HeaderLayout() {
    return(
        <TopBar>
            <TopBarLeftLinks>
                <Link href="/services"><button>GeoConectar</button></Link>
            </TopBarLeftLinks>
            <TopBarLinks>
                <Link href="/my-services"><h3>Meus Serviços</h3></Link>
                <Link href="/request"><h3>Divulgue um serviço</h3></Link>
                <Link href="/offer"><h3>Ofereça seu serviço</h3></Link>
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
`

const TopBarLeftLinks = styled.div`
    width: 25%;

button {
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #4E693C;
    cursor: pointer;
    background-color: white;
    border: none;
}
`

const TopBarLinks = styled.div`
display: flex;
justify-content: center;
width: 50%;

h3 {
    color: #1E1E1E;
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