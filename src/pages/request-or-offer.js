import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import { BiWorld } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Qual é o seu objetivo na <Verde>GeoConectar</Verde>?</h1>
                <Goals>
                    <Link href="/request"><Request>
                        <Cash/>
                        <h3>Sou um contratante</h3>
                        <h4>Quero divulgar um serviço</h4>
                    </Request></Link>
                    <Link href="/request"><Job>
                        <Planet/>
                        <h3>Sou uma empresa</h3>
                        <h4>Quero divulgar uma vaga</h4>
                    </Job></Link>
                    <Link href="/offer"><Offer>
                        <Megaphone/>
                        <h3>Sou um profissional</h3>
                        <h4>Quero oferecer um serviço</h4>
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
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    border: none;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #4E693C;
    }

    h4 {
        color: #1E1E1E;
        font-weight: 700;
        margin-top: 6px;
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;
    }
`

const Job = styled.button`
    width: 190px;
    height: 168px;
    background-color: #E7E4C9;
    border-radius: 24px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    border: none;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #4E693C;
    }

    h4 {
        color: #1E1E1E;
        font-weight: 700;
        margin-top: 6px;
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;
    }
`

const Cash = styled(FaMoneyCheck)`
    font-size: 34px;
    color: #4E693C;
    margin-bottom: 8px;
`

const Planet = styled(BiWorld)`
    font-size: 38px;
    color: #4E693C;
    margin-bottom: 8px;
`

const Offer = styled.button`
    width: 190px;
    height: 168px;
    background-color: #E7E4C9;
    padding: 10px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 8px 0px 8px;
    cursor: pointer;
    border: none;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #4E693C;
    }

    h4 {
        color: #1E1E1E;
        font-weight: 700;
        margin-top: 6px;
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;
    }
`;

const Megaphone = styled(BsMegaphone)`
    font-size: 32px;
    color: #4E693C;
    margin-bottom: 8px;
`

const Verde = styled.span`
color: #4E693C;
`