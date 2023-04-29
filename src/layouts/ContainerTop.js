import styled from "@emotion/styled";
import React from "react";
import Link from "next/link"

export default function ContainerTop(){
    return(
        <Container>
            <h1>GeoConectar</h1>
            <h3>Conecte-se com profissionais qualificados 
            para o seu projeto</h3>
            <Link href="/request-or-offer"><button>Solicite ou ofereça seu serviço</button></Link>
        </Container>
    )
}

const Container = styled.div`
    height: 245px;
    width: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E7E4C9;
    border-radius: 12px;
    margin: 64px 0px 32px 0px;
    padding: 32px;
    text-align: center;

    h1 {
        font-family: "Saira Semi Condensed";
        font-size: 32px;
        font-weight: 700;
        color: #4E693C;
        margin-bottom: 16px;
    }

    h3 {
        font-size: 24px;
        width: 65%;
        line-height: 128%;
    }

    button {
        width: 326px;
        height: 42px;
        background: #A5B167;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin-top: 24px;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        height: auto;

        button {
            width: 100%;
            height: auto;
            text-align: center;
            padding: 10px 20px;
        }
    }
`;
