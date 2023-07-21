import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/imgs/svglogovertical.svg"

export default function ContainerTop(){
    return(
        <Container>
            <Image width={170} src={logo}/>
            <h3>Conecte-se com profissionais qualificados 
            para o seu projeto</h3>
            <Link href="/request-or-offer"><button>Solicite ou ofereça seu serviço</button></Link>
        </Container>
    )
}

const Container = styled.div`
    width: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E2DDD7;
    border-radius: 12px;
    margin: 64px 0px 32px 0px;
    padding: 32px;
    text-align: center;

    h3 {
        font-family: "Roboto";
        font-size: 20px;
        width: 55%;
        line-height: 128%;
        padding-top: 16px;
    }

    button {
        width: 326px;
        height: 42px;
        background: #c59c6c;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin-top: 24px;
    }

    @media screen and (max-width: 600px) {
        width: 94%;
        height: auto;
        padding: 50px 30px;
        margin-top: 32px;

        h1, h3 {
            width: 100%;
        }

        button {
            width: 100%;
            height: auto;
            text-align: center;
            padding: 10px 20px;
        }
    }
`;

