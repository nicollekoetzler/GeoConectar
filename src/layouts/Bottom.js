import styled from "@emotion/styled";
import React from "react";
import Link from "next/link"
import Image from "next/image";
import icon from "../../public/imgs/svglogo.svg"

export default function BottomLayout(){
    return(
        <Bottom>
            <Image width={60} src={icon}/>
            <BottomLinks>
                <Link href="/about-us"><p>Sobre nós</p></Link>
                <Link href="/contact"><p>Contato</p></Link>
                <Link href="/faq"><p>Perguntas frequentes</p></Link>
                <Link href="/terms"><p>Termos</p></Link>
                <Link href="/privacy"><p>Privacidade</p></Link>
            </BottomLinks>
        </Bottom>
    )
}

const Bottom = styled.footer`
    height: 100px;
    width: 100%;
    border-top: solid 1px #cdcdcd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    @media screen and (max-width: 600px) {
        height: auto;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        padding-top: 24px;
    }
`;

const BottomLinks = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";

    p {
        color: #754c24;
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
            padding-top: 8px;
        }
    }
`
