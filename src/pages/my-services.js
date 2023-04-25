import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import SideBanner from "@/layouts/SideBanner";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <h1>Meus serviços</h1>
                <Content>
                    <MyServices>
                        <Service>
                            <h2>Gestão de agenda, reuniões, treinamentos, acompanhamento 
                            pós venda</h2>
                            <h4>Publicado há 48 minutos</h4>
                            <h3>Preciso de um profissonal para melhorar meu perfil do linkedin, tenho um perfil no linkedin e gostaria de fazer 
                            melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h3>
                                <div>
                                    <Link href="/chat"><Button>Ir para as mensagens</Button></Link>
                                </div>
                        </Service>
                        <Service>
                            <h2>Gestão de agenda, reuniões, treinamentos, acompanhamento 
                            pós venda</h2>
                            <h4>Publicado há 48 minutos</h4>
                            <h3>Preciso de um profissonal para melhorar meu perfil do linkedin, tenho um perfil no linkedin e gostaria de fazer 
                            melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h3>
                            <p>Serviço concluído</p>
                        </Service>
                    </MyServices>
                    <SideBanner />
                </Content>
                <BottomLayout/>
            </Background>
        </>
    );
}



const Background = styled.div`
display: flex;
align-items: center;
flex-direction: column;

h1 {
    font-weight: 700;
    font-size: 24px;
    margin: 64px 0px 32px 0px;
}
`

const Content = styled.div`
display: flex;
`

const MyServices = styled.div`
margin-right: 32px;
`

const Service = styled.div`
width: 700px;
background-color: white;
border-radius: 12px;
border: 1px solid #CDCDCD;
padding: 32px;
margin-bottom: 16px;

h2 {
    font-size: 22px;
}

h3 {
    padding: 0px 24px 24px 0px;
    line-height: 128%;
}

h4 {
    font-size: 14px;
    color: #4E693C;
    margin: 16px 0px 24px 0px;
}

p {
    color: #4E693C;
    font-weight: 700;
    font-size: 16px;
}
`

const Button = styled.button`
height: 35px;
background: white;
border-radius: 50px;
border: none;
cursor: pointer;
color: #4E693C;
border: solid 1px #4E693C;
font-weight: 700;
font-size: 14px;
padding: 0px 32px 0px 32px;
`