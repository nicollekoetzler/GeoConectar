import styled from "@emotion/styled";
import React from "react";
import HeaderLayout from "@/layouts/Header";
import BottomLayout from "@/layouts/Bottom";
import ContainerTop from "@/layouts/ContainerTop";
import Link from "next/link"

export default function Services() {

    return (
        <>
            <HeaderLayout />
            <Background>
                <ContainerTop />
                <ContainerBottom>
                    <Category>
                        <Link href="/services"><button>Serviços</button></Link>
                        <Link href="/professionals"><button>Profissionais</button></Link>
                        <Link href="/vacancies"><button>Vagas</button></Link>
                    </Category>
                    <Service>
                        <h1>Ofereço mentoria para Linkedin</h1>
                        <h3>João da Silva | Publicado há 48 minutos</h3>
                        <h2>Preciso de um profissonal para melhorar meu perfil do linkedin , tenho um perfil no linkedin e gostaria de fazer 
melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h2>
                        <div>
                            <Link href="/professionals/details"><ConnectButton>Conecte-se</ConnectButton></Link>
                            <Link href="/chat"><QuestionButton>Faça uma pergunta</QuestionButton></Link>
                        </div>
                    </Service>
                    <Service>
                        <h1>Ofereço mentoria para currículo</h1>
                        <h3>João da Silva | Publicado há 22 minutos</h3>
                        <h2>Preciso de um profissonal para melhorar meu perfil do linkedin , tenho um perfil no linkedin e gostaria de fazer 
melhoria no meu perfil melhorar minhas perfil em geral para que seja mais atrativo</h2>
                        <div>
                            <Link href="/professionals/details"><ConnectButton>Conecte-se</ConnectButton></Link>
                            <Link href="/chat"><QuestionButton>Faça uma pergunta</QuestionButton></Link>
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