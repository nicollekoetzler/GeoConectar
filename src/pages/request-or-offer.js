import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { BiWorld } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Qual é o seu objetivo na <Verde>GeoConectar</Verde>?</h1>
                <Goals>
                    <Link href="/request"><Request>
                        <Planet/>
                        <h3>Divulgar serviço ou vaga</h3>
                    </Request></Link>
                    <Link href="/offer"><Offer>
                        <Megaphone/>
                        <h3>Oferecer serviço</h3>
                    </Offer></Link>
                </Goals>
            </Background>
            <BottomLayout />
        </>
    );
}



const Background = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    font-family: "Roboto";

    h1 {
        font-weight: 700;
        font-size: 24px;
        margin: 64px 0px 32px 0px;
    }

    @media screen and (max-width: 600px) {
        h1 {
            text-align: center
        }
    }
`;

const Goals = styled.div`
    display: flex;
    margin-bottom: 50px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Request = styled.button`
    width: 190px;
    height: 168px;
    background-color: #E7E4C9;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    border: none;

    h3 {
        width: 80%;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-top: 8px;
        color: #1E1E1E;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;
    }
`

const Planet = styled(BiWorld)`
    font-size: 38px;
    color: #4E693C;
`

const Offer = styled.button`
    width: 190px;
    height: 168px;
    background-color: #E7E4C9;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    border: none;
    color: #1E1E1E;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-top: 8px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;
    }
`;

const Megaphone = styled(BsMegaphone)`
    font-size: 38px;
    color: #4E693C;
`

const Verde = styled.span`
color: #4E693C;
`