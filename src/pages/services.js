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
                <ContainerTop>
                    <h1>GeoConectar</h1>
                    <h3>Conecte-se com profissionais qualificados 
                    para o seu projeto</h3>
                    <Link href="/request-or-offer"><button>Solicite ou ofereça seu serviço</button></Link>
                </ContainerTop>
                <ContainerBottom>
                    <Category>
                        <Link href="/services"><button>Serviços</button></Link>
                        <Link href="/professionals"><button>Profissionais</button></Link>
                        <Link href="/vacancies"><button>Vagas</button></Link>
                    </Category>
                    <Service>
                        <h1>Preciso de um profissonal para melhorar meu perfil do linkedin</h1>
                        <h3>Publicado há 48 minutos</h3>
                        <h2>Preciso de um profissonal para melhorar meu perfil do linkedin, tenho um perfil no linkedin e gostaria de fazer 
                        melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h2>
                        <div>
                            <Link href="/services/details"><ConnectButton>Conecte-se</ConnectButton></Link>
                            <QuestionButton>Faça uma pergunta</QuestionButton>
                        </div>
                    </Service>
                    <Service>
                        <h1>Conciliação de planilha</h1>
                        <h3>Publicado há 22 minutos</h3>
                        <h2>Preciso de um profissonal para melhorar meu perfil do linkedin , tenho um perfil no linkedin e gostaria de fazer 
                        melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h2>
                        <div>
                            <Link href="/services/details"><ConnectButton>Conecte-se</ConnectButton></Link>
                            <QuestionButton>Faça uma pergunta</QuestionButton>
                        </div>
                    </Service>
                    <Pages>
                        <p>Próxima página</p>
                    </Pages>
                </ContainerBottom>
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

const ContainerTop = styled.div`
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
`

const ContainerBottom = styled.div`
width: 62%;
background-color: white;
border-radius: 12px;
border: 1px solid #CDCDCD;
`

const Category = styled.div`
height: 44px;
display: flex;
align-items: center;
justify-content: center;

button {
    font-size: 18px;
    font-weight: 700;
    color: #727272;
    background-color: white;
    border: none;
    cursor: pointer;
    margin: 0px 16px 0 16px;
    transition: 0.3s;
}

button:hover {
    color: #1E1E1E;
}
`

const Service = styled.div`
border-top: 1px solid #CDCDCD;
padding: 32px 0px 32px 0px;

h1 {
    font-size: 22px;
    padding-left: 24px;
}

h2 {
    padding: 0px 24px 24px 24px;
    line-height: 128%;
}

h3 {
    font-size: 14px;
    color: #4E693C;
    padding-left: 24px;
    margin: 16px 0px 24px 0px;
}
`

const ConnectButton = styled.button`
    text-decoration: none;
    width: 168px;
    height: 35px;
    background: #4E693C;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 14px;
    font-weight: 700;
    margin-left: 24px;
`

const QuestionButton = styled.button`
    width: 168px;
    height: 35px;
    background: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #4E693C;
    border: solid 1px #4E693C;
    font-weight: 700;
    font-size: 14px;
    margin-left: 16px;
`

const Pages = styled.div`
    height: 76px;
    border-top: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;

p {
    cursor: pointer;
}
`