import styled from "@emotion/styled";
import React from "react";
import Link from "next/link"

export default function BottomLayout(){
    return(
        <Bottom>
            <p>GeoConectar</p>
            <BottomLinks>
                <Link href="/my-services"><p>Sobre nós</p></Link>
                <Link href="/request-or-offer"><p>Contato</p></Link>
                <Link href="/request-or-offer"><p>Perguntas frequentes</p></Link>
                <Link href="/request-or-offer"><p>Termos</p></Link>
                <Link href="/request-or-offer"><p>Privacidade</p></Link>
            </BottomLinks>
        </Bottom>
    )
}

const Bottom = styled.div`
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
        margin-top: 30px;
    }
`;

const BottomLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    font-family: "Roboto";

    p {
        color: #65624C;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.3s;
        margin-right: 24px
    }

    p:hover {
        color: #000000;
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        p {
            font-size: 14px;
            align-self: center;
        }

        a:nth-child(3),
        a:nth-child(2) {
            display: none;
        }

    }
`
