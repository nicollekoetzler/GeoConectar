import styled from "@emotion/styled";
import React from "react";
import Link from "next/link"

export default function BottomLayout(){
    return(
        <Bottom>
            <h4>GeoConectar</h4>
            <BottomLinks>
                <Link href="/about-us"><p>Sobre nós</p></Link>
                <Link href="/request-or-offer"><p>Contato</p></Link>
                <Link href="/request-or-offer"><p>Perguntas frequentes</p></Link>
                <Link href="/request-or-offer"><p>Termos</p></Link>
                <Link href="/request-or-offer"><p>Privacidade</p></Link>
            </BottomLinks>
        </Bottom>
    )
}

const Bottom = styled.footer`
    height: 100px;
    width: 100%;
    background-color: #E7E4C9;
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #65624C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    @media screen and (max-width: 600px) {
        height: auto;
        margin-top: 80px;
        display: flex;
        flex-direction: column;

        h4 {
            margin: 24px 0 24px 0;
        }
    }
`;

const BottomLinks = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";

    p {
        color: #65624C;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.3s;
        margin-right: 24px;
    }

    p:hover {
        color: #000000;
    }

    a:nth-child(5) {
        margin-right: 0;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        p {
            font-size: 14px;
            align-self: center;
            margin: 0;
            padding-bottom: 8px;
        }
    }
`
