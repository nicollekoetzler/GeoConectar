import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import Link from "next/link"

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
                        <Options>
                            <p>Gostou do serviço?</p>
                            <Link href="confirmation"><ConnectButton>Conecte-se</ConnectButton></Link>
                            <p>Ficou com alguma dúvida?</p>
                            <ChatButton>Converse com o cliente</ChatButton>
                        </Options>
                        <Banner>
                            <h5>GeoConectar</h5>
                            <p>Que tal conectar-se com mais pessoas?</p>
                            <BannerButton>Solicite ou ofereça seu serviço</BannerButton>
                        </Banner>
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

const Options = styled.div`
width: 273px;
height: fit-content;
border-radius: 12px;
background-color: #E7E4C9;
padding: 32px;

p {
    line-height: 122.69%;
    margin: 0px 0px 16px 0;
    font-size: 14px;
}
`

const ConnectButton = styled.button`
height: 35px;
width: 100%;
background-color: #4E693C;
border-radius: 50px;
border: none;
cursor: pointer;
color: white;
font-weight: 700;
margin-bottom: 16px;
`

const ChatButton = styled.button`
height: 35px;
width: 100%;
border-radius: 50px;
border: none;
border: 1px solid #4E693C;
background-color: #E7E4C9;
cursor: pointer;
color: #4E693C;
font-weight: 700;
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