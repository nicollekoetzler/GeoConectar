import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import Options from "@/layouts/Options";
import SideBanner from "@/layouts/SideBanner";

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <Content>
                    <Info>
                        <h2>Preciso de um profissonal para melhorar meu perfil do linkedin</h2>
                        <h5>Publicado em 18 de Abril</h5>
                        <h3>Descrição do projeto:</h3>
                        <h4>Preciso de um profissonal para melhorar meu perfil do linkedin, tenho um perfil no linkedin e gostaria de fazer melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo
                        <br/>Preciso de um profissonal para melhorar meu perfil do linkedin, tenho um perfil no linkedin e gostaria de fazer melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h4>
                    </Info>
                    <div>
                        <Options />
                        <SideBanner />
                    </div>
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
`

const Content = styled.div`
display: flex;
margin-top: 64px;
`

const Info = styled.div`
width: 700px;
height: fit-content;
background-color: white;
border-radius: 12px;
border: 1px solid #CDCDCD;
padding: 32px;
margin-bottom: 16px;
margin-right: 32px;

h2 {
    font-size: 22px;
}

h3{
    font-size: 16px;
    margin-bottom: 16px;
    color: #4E693C;
}

h4 {
    line-height: 128%;
}

h5 {
    font-size: 14px;
    color: #727272;
    margin: 16px 0px 24px 0px;
}
`

const Banner = styled.div`
width: 273px;
height: fit-content;
border-radius: 12px;
background-color: #E7E4C9;
padding: 32px;
margin-top: 16px;

h5 {
    font-family: "Saira Semi Condensed";
    font-size: 22px;
    font-weight: 700;
    color: #4E693C;
    margin-bottom: 24px;
}

p {
    line-height: 122.69%;
    margin: 24px 0px 24px 0;
}
`

const BannerButton = styled.button`
height: 52px;
width: 100%;
background-color: #A5B167;
border-radius: 50px;
border: none;
cursor: pointer;
color: white;
font-size: 14px;
font-weight: 700;
`