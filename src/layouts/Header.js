import styled from "@emotion/styled";
import { useState } from "react";
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link"
import Logout from "@/components/Logout";


export default function HeaderLayout() {
    const [logout , setLogout] = useState(false);

    return(
        <TopBar>
            <TopBarLeftLinks>
                <Link href="/services"><button>GeoConectar</button></Link>
            </TopBarLeftLinks>
            <TopBarLinks>
                <Link href="/my-services"><h3>Meus Serviços</h3></Link>
                <Link href="/request-or-offer"><h3>Criar serviço</h3></Link>
            </TopBarLinks>
            <TopBarRightLinks>
                <Link href="/chat"><Chat/></Link>
                <User onClick={() => {setLogout(!logout)}} logout={logout}/>
            </TopBarRightLinks>
            {logout ? <Logout setLogout={setLogout}/> : ''}
        </TopBar>
    )
}

const TopBar = styled.div`
    min-height: 80px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #CDCDCD;
    padding: 0px 64px 0px 64px;

    @media screen and (max-width: 600px) {
        padding: 0px 10px;
    };
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

    @media screen and (max-width: 600px) {
        width: 100%;

        button {
            font-size: 22px;
        }
    }
`

const TopBarLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    font-family: "Roboto";

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

    @media screen and (max-width: 600px) {
        width: 100%;

        h3 {
            font-size: 14px;
            align-self: center;
        }

        a:nth-child(3),
        a:nth-child(2) {
            display: none;
        }

    }
`

const TopBarRightLinks = styled.div`
    display: flex;
    justify-content: end;
    width: 25%;
`

const Chat = styled(BsChatDots)`
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